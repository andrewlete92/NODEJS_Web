const fs = require("fs");
list_courses=[];

const createCourse = (course) =>{
	loadCourses();

	exist_course = list_courses.find(c => c.id == course.id);
	if(!exist_course){
		list_courses.push(course);
		saveCourses();
		return true;
	}else{
		return false;
	}
}

const deleteCourse = (course_id) =>{
	loadCourses();

	index = list_courses.findIndex(c => c.id == course_id);
	if(index != -1){
		list_courses[index].availability = "Cerrado";
		saveCourses();
	}
}

const loadCourses = ()=>{
	try{
		list_courses = require("./cursos.json");
	}catch(error){
		list_courses = [];
	}
}

const saveCourses = () =>{
	let data = JSON.stringify(list_courses);
	fs.writeFile("./src/cursos.json",data, (err)=>{
		if(err){
			throw err;
		}
		console.log("Curso Guardado con Éxito");
	});
}

module.exports = {
	createCourse,
	deleteCourse
};