//1
const getStudents = async () => {
  const url = `http://localhost:3000/students`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return {};
  }
};
console.log(getStudents());
//2
const addStudents = async (students) => {
  const url = `http://localhost:3000/students`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(students),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const adedStudents = await response.json();
    return adedStudents;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};

//3
const updeateStudents = async (id, students) => {
  const url = `http://localhost:3000/students/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(students),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const upatedStudents = await response.json();
    return upatedStudents;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};

//4
const updatePartOfStudents = async (id, students) => {
  const url = `http://localhost:3000/students/${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(students),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const upatedstudents = await response.json();
    return upatedstudents;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};

//5
const deleteStudents = async (id) => {
  const url = `http://localhost:3000/students/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const deletedPost = await response.json();
    return deletedPost;
  } catch (error) {
    console.error(`Помилка при delet ${error}`);
    return null;
  }
};

document
  .getElementById("get-students-btn")
  .addEventListener("click", async () => {
    const students = await getStudents();
    const tbody = document.querySelector("#students-table tbody");
    tbody.innerHTML = "";

    students.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
          <td>${student.skills.join(", ")}</td>
          <td>${student.email}</td>
          <td>${student.isEnrolled ? "Так" : "Ні"}</td>
          <td>
              <button onclick="editStudent(${student.id})">Редагувати</button>
              <button onclick="deleteStudent(${student.id})">Видалити</button>
          </td>
      `;
      tbody.appendChild(row);
    });
  });

document
  .getElementById("add-student-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const student = {
      name: document.getElementById("name").value,
      age: parseInt(document.getElementById("age").value),
      course: document.getElementById("course").value,
      skills: document
        .getElementById("skills")
        .value.split(",")
        .map((skill) => skill.trim()),
      email: document.getElementById("email").value,
      isEnrolled: document.getElementById("isEnrolled").checked,
    };

    await addStudents(student);
    document.getElementById("add-student-form").reset();
  });
