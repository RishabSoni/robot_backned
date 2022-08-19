const PHONE_REGEXP =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{5}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)?$/;
const SIX_DIGIT_REGEXP = /^[0-9]{6}$/;
const FOUR_DIGIT_REGEXP = /^[0-9]{4}$/;
const ISD_CODE_REGEXP = /^(\+?\d{1,3}|\d{1,4})$/;
const USER_NAME_REGEXP = /^[a-zA-Z0-9_ ]*$/;
const ONLY_NUMBERS = /^[0-9]*$/;
const NUMBER_DECIMAL = /^(0|[1-9]\d*)(\.\d+)?$/;
const FILE_SIZE = 1024 * 1024 * 2;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const DOB_REGEXP = /^\d{2}[/]\d{2}[/]\d{4}$/;
const ADMIN_ROLE_ID = 1
const CLIENT_ROLE_ID = 2
const PROJECT_MANAGER_ROLE_ID = 2



module.exports = {
	PHONE_REGEXP: PHONE_REGEXP,
	SIX_DIGIT_REGEXP: SIX_DIGIT_REGEXP,
	FOUR_DIGIT_REGEXP: FOUR_DIGIT_REGEXP,
	ISD_CODE_REGEXP: ISD_CODE_REGEXP,
	USER_NAME_REGEXP: USER_NAME_REGEXP,
	FILE_SIZE: FILE_SIZE,
	SUPPORTED_FORMATS: SUPPORTED_FORMATS,
	ONLY_NUMBERS: ONLY_NUMBERS,
	NUMBER_DECIMAL: NUMBER_DECIMAL,
	
	
};
