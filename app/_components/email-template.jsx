import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "http://localhost:3000";

export const EmailTemplate = ({
    body,
}) => (
    <Html>
        <Head />
        <Preview>
            Payment Confirmation for Your Food Order.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    // src={`${baseUrl}/logo.svg`}
                    src='https://i.ibb.co/8jykz52/Chef.png'
                    width="60"
                    height="60"
                    alt="FoodFiesta"
                    style={logo}
                />
                <Text style={paragraph}>Hi {body.userName},</Text>
                <Text style={paragraph}>
                    Thank you for choosing us for your recent food order. We're excited to confirm that we've received your total payment {body.amount}$ successfully.
                </Text>

                <Text style={paragraph}>
                    If you have any questions or concerns regarding your order, feel free to contact us at [Restaurant Contact Information]. We're here to assist you.
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                    Thank you once again for choosing us. We appreciate your business and hope you enjoy your meal!
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href="https://example.com">
                        Learn More
                    </Button>
                </Section>
            </Container>
        </Body>
    </Html>
);



export default EmailTemplate;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center",
};

const button = {
    // backgroundColor: "#5F51E8",
    // borderRadius: "3px",
    // color: "#fff",
    // fontSize: "16px",
    // textDecoration: "none",
    // textAlign: "center",
    // display: "block",
    // padding: "12px",
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};

