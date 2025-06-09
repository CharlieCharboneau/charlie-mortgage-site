import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Button,
} from "@react-email/components";

interface LeadNotificationEmailProps {
  lead: {
    name: string;
    email: string;
    phone: string;
    loan_type: string;
    property_value?: string;
    timeline?: string;
    comments?: string;
  };
}

export const LeadNotificationEmail = ({ lead }: LeadNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Section
            style={{
              backgroundColor: "#f8fafc",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Text
              style={{
                color: "#1f2937",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              🎉 New Lead Submitted!
            </Text>

            <Section
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{ color: "#3b82f6", fontSize: "20px", marginTop: "0" }}
              >
                Contact Information
              </Text>
              <Text>
                <strong>Name:</strong> {lead.name}
              </Text>
              <Text>
                <strong>Email:</strong>{" "}
                <Link href={`mailto:${lead.email}`}>{lead.email}</Link>
              </Text>
              <Text>
                <strong>Phone:</strong>{" "}
                <Link href={`tel:${lead.phone}`}>{lead.phone}</Link>
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{ color: "#8b5cf6", fontSize: "20px", marginTop: "0" }}
              >
                Loan Details
              </Text>
              <Text>
                <strong>Loan Type:</strong> {lead.loan_type}
              </Text>
              {lead.property_value && (
                <Text>
                  <strong>Property Value:</strong> {lead.property_value}
                </Text>
              )}
              {lead.timeline && (
                <Text>
                  <strong>Timeline:</strong> {lead.timeline}
                </Text>
              )}
            </Section>

            {lead.comments && (
              <Section
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <Text
                  style={{ color: "#10b981", fontSize: "20px", marginTop: "0" }}
                >
                  Additional Comments
                </Text>
                <Text style={{ fontStyle: "italic", color: "#6b7280" }}>
                  &quot;{lead.comments}&quot;
                </Text>
              </Section>
            )}

            <Section style={{ textAlign: "center", marginTop: "30px" }}>
              <Button
                href={`tel:${lead.phone}`}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  textDecoration: "none",
                }}
              >
                Call Now
              </Button>
              <Button
                href={`mailto:${lead.email}`}
                style={{
                  backgroundColor: "#8b5cf6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Send Email
              </Button>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
