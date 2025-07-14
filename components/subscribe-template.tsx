interface EmailTemplateProps {
  email: string;
}
// this is the email i will receive showing me that someone has subscribed to my newsletter
export function SubscribedEmailTemplate({ email }: EmailTemplateProps) {
  return (
    <div>
      <h1>New Subscriber from Portifolio Website</h1>
      <p>{email} has subscribed to your newsletter.</p>
    </div>
  );
}
