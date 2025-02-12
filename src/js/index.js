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
// addStudents({
//   name: "Max Voychuk",
//   age: 18,
//   course: "Programing",
//   skills: ["HTML", "CSS", "JavaScript", "React"],
//   email: "maxvoichuk34@example.com",
//   isEnrolled: false,
// });

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

// updeateStudents(5, {
//   id: "5",
//   name: "Mykola Bondarenko",
//   age: 18,
//   course: "Web design",
//   skills: ["Networking", "Ethical Hacking", "Linux", "Windows"],
// });

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

// updatePartOfStudents(4, {
//   course: "JS",
// });

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
deleteStudents(3);
