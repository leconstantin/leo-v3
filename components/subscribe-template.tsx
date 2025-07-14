import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  email: string;
}

export const SubscribedTemplate = ({ email }: EmailTemplateProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Ensure the email is displayed safely
  const safeEmail = email || '[No email provided]';

  return (
    <Html>
      <Head>
        <Font
          fallbackFontFamily="Arial"
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight={400}
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
        />
      </Head>
      <Preview>
        New subscriber: {safeEmail} has joined your mailing list!
      </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-gray-50 font-sans">
          <Container className="mx-auto my-8 max-w-[600px]">
            {/* Header */}
            <Section className="rounded-t-lg bg-blue-600 px-8 py-6">
              <Row>
                <Column>
                  <Text className="text-center font-bold text-3xl text-white">
                    Portifolio
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section className="rounded-b-lg bg-white px-8 py-10 shadow-sm">
              <Row>
                <Column>
                  <Text className="mb-5 font-bold text-2xl text-gray-800">
                    New Subscriber Alert
                  </Text>

                  <Text className="mb-5 text-gray-700">
                    You have a new subscriber to your mailing list! Someone is
                    interested in hearing more about your work.
                  </Text>

                  {/* Subscriber Info */}
                  <Container className="mb-6 rounded-md border-blue-500 border-l-4 bg-blue-50 p-5">
                    <Text className="mb-1 font-medium text-base text-blue-800">
                      Subscriber Details:
                    </Text>
                    <Text className="mb-0 text-blue-800">
                      <strong>Email:</strong> {safeEmail}
                    </Text>
                    <Text className="mb-0 text-blue-800">
                      <strong>Subscribed on:</strong> {currentDate}
                    </Text>
                  </Container>

                  {/* Action Button */}
                  <Section className="mb-8 text-center">
                    <Button
                      className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                      href={`mailto:${safeEmail}`}
                    >
                      Contact Subscriber
                    </Button>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Text className="mb-4 text-gray-700">
                    Remember to maintain GDPR compliance when reaching out to
                    new subscribers.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="px-8 py-6">
              <Text className="text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Leo. All rights reserved.
              </Text>
              <Text className="text-center text-gray-500 text-xs">
                This is an automated notification from your website&apos;s
                subscription system.
              </Text>
              <Text className="text-center text-gray-500 text-xs">
                <Link className="text-blue-500 underline" href="#">
                  Unsubscribe
                </Link>{' '}
                from these notifications
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
