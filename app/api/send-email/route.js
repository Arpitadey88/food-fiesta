
// import { Resend } from 'resend';
// import { EmailTemplate } from '../../_components/email-template';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//     try {
//         const data = await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: ['banikarpita1011@gmail.com'],
//             subject: 'Orders from FoodFiesta',
//             react: EmailTemplate({ firstName: 'from FoodFiesta.We are excited to confirm that we have received your payment successfully.' }),
//         });

//         return Response.json(data);
//     } catch (error) {
//         return Response.json({ error });
//     }
// }

import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();
    console.log('email template body', body);
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [body.email],
            subject: 'Orders from FoodFiesta',
            react: EmailTemplate({ body }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
