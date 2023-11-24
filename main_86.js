var grades = [];
        var update_scores = function () {
           var val = get_item_list(grades);
           //Agrega el nombre de identificación apropiado para leer los puntajes, nombre_alumno
           document.getElementById("puntajes").value = val;
           document.getElementById("nombre_alumno").value = "";
           document.getElementById("puntaje").value = "";   
           document.getElementById("nombre_alumno").focus();
        }    
        //Función pára agregar al final, primero hay que agregar el puntaje student_grade
        var student_grade_add_click = function() {
        var last = document.getElementById("nombre_alumno").value;
                var score = parseFloat(document.getElementById('puntaje').value);
                grades.push([last, score]);  
                update_scores();
                document.getElementById("promedio_puntaje").value = getAverageScore(grades);
        }

        var get_item_list = function(item_list) {
           if ( item_list.length == 0 ) {
              return "";
           }
           var list = "";
           for ( var i = 0; i < item_list.length; i++) {
              var current = item_list[i];
              for ( var attribute in current ) {
                  list += current[attribute] + ", "; 
              }
          list += "\n";  
           }
           return list;
        }
        
        //Función promedio
        function getAverageScore(grades){ 
        
        var numberOfStudents = grades.length; 
        var sum = 0; 
        if(numberOfStudents > 0) { 
            for(var i=0; i < numberOfStudents; i++) {
                sum += grades[i][1]; 
            }
        return sum/numberOfStudents; 
        }
        return 0; 
        }
        
        function clear_click()
        {
                document.getElementById("forma").reset();
                document.getElementById("promedio_puntaje").value="";
                grades.splice(0, grades.length);  
        }
        
        var sort_click = function () 
        {
        //Agrega la función sort() para ordenar a los alumnos por su nombre
        grades.sort();
        update_scores();
        }
        
        window.onload = function() {
                document.getElementById("botón_agregar").onclick = student_grade_add_click;
                document.getElementById("botón_ordenar").onclick = sort_click;      
                document.getElementById("nombre_alumno").focus();
        }
        