jest.mock('nodemailer');

process.env.SENDER = 'email';
process.env.DATA_PARSER = 'csv';
process.env.CSV_FILE_PATH = './tests/file.csv';
process.env.SMTP_HOST = '127.0.0.1';
process.env.SMTP_PORT = '1025';
process.env.SMTP_SECURE = 'false';
process.env.SMTP_USER = '';
process.env.SMTP_PASS = '';
process.env.EMAIL = 'test@greeter.test';
