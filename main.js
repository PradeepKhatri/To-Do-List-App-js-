window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

    let todos = [];

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);


		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = '<i class="edit fa-solid fa-pen-to-square"></i> ';
/* <i class="edit fa-solid fa-pen-to-square"></i>  */
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = '<i class="delete fa-solid fa-trash"></i>';
        // <i class="delete fa-solid fa-trash"></i>

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);


        list_el.appendChild(task_el)

        input.value='';

        // list_el.addEventListener('click', function(ev) {
            
        //    list_el.classList.add('checked');
        // }, false);

        // $('div').on('click', function(){
        //     $(this).toggleClass('checked')
        //   });

        // console.log(list_el.children[0]);
        // $('#tasks').click(function(event) {
        //     var text = $(event.target).text();
        // });
        list_el.addEventListener('click',(e) => {
            var x = list_el;
            console.log(x);
        })
        task_edit_el.addEventListener('click',(e)=> {
                if(task_edit_el.innerText == "") {
                    task_edit_el.innerHTML = "Save";
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                }
                else {
                    task_edit_el.innerHTML = '<i class="edit fa-solid fa-pen-to-square"></i>';
                    task_con.setAttribute("readonly", "readonly");
                }
        })

    
        task_delete_el.addEventListener('click',(e) => {
            list_el.removeChild(task_el);
        });
    });
});

