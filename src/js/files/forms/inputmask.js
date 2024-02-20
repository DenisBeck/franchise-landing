/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('.open-form__input-phone');
if (inputMasks.length) {
	const im = new Inputmask("+7(999)999-99-99")
	// flsModules.inputmask = Inputmask().mask(inputMasks);
	inputMasks.forEach(inputMask => im.mask(inputMask))
}