$(document).ready(function () {

	var burgerMenuItem = document.querySelector('.burger-item');

	burgerMenuItem.onclick = function () {
		var MenuBurger = document.querySelector('.burger-lines');
		var mobileNav = document.querySelector('.mobile-nav');

		MenuBurger.classList.toggle('burger-active');
		mobileNav.classList.toggle('mobile-nav-active');

	};
	//-фильтрация работ
	$('.filter-projects').mixItUp();

	//-fake-placeholder
	var validateInputs = document.querySelectorAll('.input-validate');
	for (var i = 0; i < validateInputs.length; i++) {
		validateInputs[i].addEventListener('focus', function () {

			this.nextElementSibling.classList.add('active');

		});
		validateInputs[i].addEventListener('blur', function () {
			if (this.value.length == '0') {
				this.nextElementSibling.classList.remove('active');
			}
		});
		validateInputs[i].addEventListener('input', function () {

			if (this.value.length !== '0') {
				this.nextElementSibling.classList.add('active');
			} else {
				this.nextElementSibling.classList.remove('active');
			}
		});
	}

	//-validate form
	$('#contact-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			theme: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите Ваш Email',
				email: 'Отсутствует символ @'
			},
			theme: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		},

		submitHandler: function (form) {
			ajaxFormSubmit();
		}
	});

	// Функция AJAX запрса на сервер
	function ajaxFormSubmit() {
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



});
