const mailjet = require('node-mailjet')
    .connect('24f46a5d8ea3c662b1ec4620f230c25e', 'ca4d466b9b472a29ec3b1a6d513aab52')

const sendReceipt = (email, cardHolder, amount, date) => {
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "kmklaksitha@gmail.com",
                        "Name": "Rezerve.com"
                    },
                    "To": [
                        {
                            "Email": email,
                            "Name": cardHolder
                        }
                    ],
                    "TemplateID": 3934882,
                    "TemplateLanguage": true,
                    "Subject": "Reservation Receipt",
                    "Variables": {
                        "firstname": cardHolder,
                        "total_price": amount,
                        "order_date": date,
                        "order_id": "R001"
                    }
                }
            ]
        })

    request
        .then((result) => {
            console.log("email has been sent>>", result.body)
        })
        .catch((err) => {
            console.log("error while sending email", err.statusCode)
        })
}

module.exports = sendReceipt
