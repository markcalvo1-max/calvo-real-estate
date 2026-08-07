/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const caCity = e.record.get("ca_city");
  const moveDate = e.record.get("move_date");
  const message = e.record.get("message") || "—";

  const html = `
    <h2>New Relocation Guide Request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Current CA City:</strong></td><td>${caCity}</td></tr>
      <tr><td><strong>Target Move Date:</strong></td><td>${moveDate}</td></tr>
      <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
    </table>
  `;

  const msg = new MailerMessage({
    from: { name: "Calvo Real Estate" },
    to: [{ address: "markcalvo1@gmail.com" }],
    subject: `New Relocation Guide Request — ${name}`,
    html: html,
  });

  try {
    $app.newMailClient().send(msg);
  } catch (err) {
    $app.logger().error("relocation lead email failed", "to", "markcalvo1@gmail.com", "err", String(err));
  }

  e.next();
}, "relocation_leads");
