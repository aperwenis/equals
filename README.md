### Description
- Easy to add new dataParsers, just add new entry into switch + enum, I added dummy Sqlite parser for showcase.
- Easy to add new senders, just add new entry into switch + enum, I added dummy Sms sender for showcase.
- Added check if sender supports dataParser (Due to possible of missing data in parser, ex. no phone number in csv)
- Thanks to use of EventEmitter easy to modify to have multiple senders
- Fully utilizing asynchronous feature of node (However it's harder to test)
- Since during interview I was told you only write functional tests, I only added those. Nodemailer and date is mocked though.
- Before release, I would add custom logger instead of `console.` 

### envs

```
SENDER=email
DATA_PARSER=csv
CSV_FILE_PATH=/path/to/file.csv
SMTP_HOST=127.0.0.1
SMTP_PORT=1025
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
EMAIL=test@greeter.test

```

##### prod
1. Add envs
2. `npm run build`
3. `npm run start`

#### dev
1. `cp .env.dist .env`
2. `npm run dev`

#### test
`npm run qc`
