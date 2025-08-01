import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost:3000' // Your redirect URI
    )

    // Set the refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    const mybusiness = google.mybusinessbusinessinformation('v1')
    
    const response = await mybusiness.locations.reviews.list({
      auth: oauth2Client,
      parent: 'locations/10300107045402078086'
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}