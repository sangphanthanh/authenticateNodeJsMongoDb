module.exports = {
	database: 'mongodb://localhost:27017/authapp',
	secret: 'AuthenticationTokenKey',
	port: '8000',
	TokenTime: '7d',
	roundSalt: 10, //set salt 10 round for bcrypt
	defaultpassdwd : '04070407',
	expiresdoorlog: '7d',
	// these values can be whatever you want - we're defaulting to a
    // max of 5 attempts, resulting in a 2 hour lock
	MAX_LOGIN_ATTEMPTS: 5,
	LOCK_TIME: 2 * 60 * 60 * 1000,
	SALT_WORK_FACTOR: 10,
	//  STATUS CODE
	ST_Code01: 'Fail to add new device',
	ST_Code02: 'Added new device',
	ST_Code03: 'Device Already Added',
	ST_Code04: 'Log not found',
	ST_Code05: 'Device not found',
	ST_Code06: 'User not found',
	ST_Code07: 'RFID',
	ST_Code08: 'Welcome to Adquest Asia',
	ST_Code09: 'UUID not match',
	ST_Code10: 'QRScan',
	ST_Code11: 'User Already Added',
	ST_Code12: 'Fail to register',
	ST_Code13: 'User registered',
	ST_Code14: 'Wrong password',
	ST_Code15: 'Password has been change',
	ST_Code16: 'Password has been reset',
	ST_Code17: 'External Actor',
	ST_Code18: 'Max Attempts',

	// ERROR CODE
	ER_Code01: 'Update fail',
	ER_Code02: 'Update successfully',
	ER_Code03: 'Permission require',
	ER_Code04: 'Remove fail',
	ER_Code05: 'Remove successfully',

	//MALLER_Config
	MAILLER_CONF_USERNAME: 'adquestasia.kelvin@gmail.com',
	MAILLER_CONF_PASSWORD: 'Adquest123!@#'
}
