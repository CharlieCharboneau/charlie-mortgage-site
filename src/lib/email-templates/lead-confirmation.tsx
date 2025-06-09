import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
} from "@react-email/components";

interface LeadConfirmationEmailProps {
  lead: {
    name: string;
    loan_type: string;
  };
}

export const LeadConfirmationEmail = ({ lead }: LeadConfirmationEmailProps) => {
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
            {/* Header */}
            <Section style={{ textAlign: "center", marginBottom: "30px" }}>
              <Section
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <Text style={{ margin: "0", fontSize: "28px" }}>
                  Thank You, {lead.name}!
                </Text>
                <Text style={{ margin: "10px 0 0 0", fontSize: "16px" }}>
                  Your information has been received
                </Text>
              </Section>
            </Section>

            {/* Main Content */}
            <Section
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{ color: "#1f2937", fontSize: "20px", marginTop: "0" }}
              >
                What happens next?
              </Text>

              <Section style={{ marginBottom: "20px" }}>
                <Section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Text style={{ margin: "0" }}>
                    <strong>I&apos;ll contact you within 24 hours</strong> to
                    discuss your {lead.loan_type} needs
                  </Text>
                </Section>

                <Section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                    <Text style={{ margin: "0" }}>
                    <strong>We&apos;ll review your goals</strong> and find the
                    best loan options
                    </Text>
                </Section>

                <Section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Text style={{ margin: "0" }}>
                    <strong>I&apos;ll shop your loan</strong> across 100+
                    lenders for the best rates
                  </Text>
                </Section>
              </Section>
            </Section>

            {/* Contact Info */}
            <Section
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{ color: "#1f2937", fontSize: "20px", marginTop: "0" }}
              >
                Need to reach me sooner?
              </Text>
              <Text style={{ margin: "10px 0" }}>
                📞 <strong>Call/Text:</strong>{" "}
                <Link href="tel:+12483317979" style={{ color: "#3b82f6" }}>
                  (248) 331-7979
                </Link>
              </Text>
              <Text style={{ margin: "10px 0" }}>
                ✉️ <strong>Email:</strong>{" "}
                <Link
                  href="mailto:charlie@gorascal.com"
                  style={{ color: "#3b82f6" }}
                >
                  charlie@gorascal.com
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Section
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              <Text>Charlie Charboneau | Go Rascal Mortgage</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
