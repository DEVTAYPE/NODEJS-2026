import { emailTemplate } from "../../src/js-foundation/01-template";

// emailTemplate
describe("emailTemplate", () => {
  test("email template should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("email template should contain {{name}} and {{orderId}} placeholders", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
