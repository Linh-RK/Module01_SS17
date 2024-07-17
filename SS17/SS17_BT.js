// 5. [Thực hành] Quản lí thông tin nhân viên

// let staff = {
//   id: 1,
//   name: "Vi",
//   age: 25,
//   salary: 1000,
// };
// let company = [];
// company.push(staff);
// console.log(company);
// let staff1 = {
//   id: 2,
//   name: "Anh",
//   age: 26,
//   salary: 2000,
// };
// company.push(staff1);
// console.log(company);

// Bước 2: Thêm mới nhân viên vào trong mảng company
// Tạo các biến newName, newAge, newSalary cho người dùng nhập thông tin muốn thêm mới
// Khởi tạo đối tượng “newStaff” có chứa các thuộc tính tương tự như thuộc tính của đối tượng “staff”
// Sau đó sử dụng phương thức push() để thêm mới “newStaff” vào trong mảng “company”
// let newName = prompt("Moi ban nhap vao ten nhan vien moi");
// let newAge = +prompt("Moi ban nhap vao tuoi nhan vien moi");
// let newSalary = +prompt("Moi ban nhap vao luong nhan vien moi");
// let newStaff = {
//   id: Math.floor(Math.random() * 1001),
//   name: newName,
//   age: newAge,
//   salary: newSalary,
// };
// company.push(newStaff);
// console.log(company);
// Bước 3: Cập nhật thông tin cho nhân viên có trong mảng “company” (ví dụ cập nhật thuộc tính “salary” thông qua id)
// Cho người dùng nhập vào id nhân viên và mức lương muốn thay đổi.
// Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”
// Bước 2: Thêm mới nhân viên vào trong mảng company
// Tạo các biến newName, newAge, newSalary cho người dùng nhập thông tin muốn thêm mới
// Khởi tạo đối tượng “newStaff” có chứa các thuộc tính tương tự như thuộc tính của đối tượng “staff”
// Sau đó sử dụng phương thức push() để thêm mới “newStaff” vào trong mảng “company”

// let updateID = +prompt("Moi ban nhap vao ID nhan vien muon thay doi");
// let updateSalary = +prompt("Moi ban nhap vao muc luong muon thay doi");
// let findIndex = company.findIndex((e) => updateID == e.id);
// company[findIndex].salary = updateSalary;
// console.log(company);

// Bước 4: Xóa thông tin cho nhân viên có trong mảng “company”
// Cho người dùng nhập vào id nhân viên muốn xóa
// Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”
// Sử dụng phương thức splice() để xóa nhân viên đó khỏi mảng
// let deleteID = +prompt("Moi ban nhap vao ID nhan vien muon xoa");
// let deleteIndex = company.findIndex((e) => deleteID == e.id);
// company.splice(deleteIndex, 1);

// console.log(company);
// ==================================================================================

// 6. [Thực hành] Tạo todolist trong object
// Tạo mảng todoList có chứa các đối tượng là các công việc cần làm và trạng thái hoàn thành của chúng
// Tạo các hàm để có thể thêm mới, cập nhật hay xóa các công việc trong mảng todoList trên

// Bước 1: Tạo mảng array và cho người dùng nhập vào giá trị của n qua prompt
// Tạo mảng todoList chứa các đối tượng là các task cần làm như dưới đây
// let arr = [];
// let n = +prompt("moi ban nhap vao gia tri n");
// const todoList = [
//   { id: 1, todo: "Have breakfast", completed: false },
//   { id: 2, todo: "Have breakfast", completed: true },
//   { id: 3, todo: "Have breakfast", completed: false },
// ];
// Bước 2: Tạo hàm có tên là newTodo() truyển vào tham số todo là các việc cần làm
// Tạo biến newId để cập nhật id cho công việc mới
// Dùng vòng for để duyệt các phần tử trong mảng todoList để gán giá trị cho newId
// Cập nhật lại đối tượng newTodo với các thuộc tính: id, todo, completed
// Sử dụng phương thức push để thêm công việc mới vào mảng todoList

// function newTodo(todo) {
//   let newId = 0;
//   for (let i = 0; i < todoList.length; i++) {
//     newId = todoList.length + 1;
//   }
//   console.log(newId);
//   let newTodo = {
//     id: newId,
//     todo: todo,
//     completed: false,
//   };
//   todoList.push(newTodo);
// }
// newTodo("Hoc tu vung");
// console.log(todoList);
// Bước 3: Tạo hàm updateTodo() để cập nhật lại trạng thái cho công việc
// Tạo biến findIndex để tìm vị trí index của id cần cập nhật trạng thái trong mảng todoList
// Sử dụng hàm có sẵn findIndex (viết kiểu arrow function) để trả về kết quả
// Gán lại giá trị todoList ở vị trí index được tìm thấy bằng true

// function updateTodo(num) {
//   let updateTodoIndex = todoList.findIndex((e) => e.id == num);
//   todoList[updateTodoIndex].completed = true;
// }
// updateTodo(3);
// console.log(todoList);

// Bước 4: Tạo hàm removeTodo() để cập nhật lại trạng thái cho công việc
// Tạo biến check = - 1 và sử dụng kỹ thuật cắm cờ để kiểm tra id đó có tồn tại trong mảng todoList không (có thể sử dụng hàm findIndex() như ở bước 3)
// Dùng vòng for để duyệt các phần tử, nếu tìm thấy id thì gán check = i
// Ra ngoài vòng for sử dụng phương thức splice xóa đi 1 phần tử ở vị trí check

// function removeTodo(id) {
//   let check = -1;
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].id == id) {
//       check = i;
//     }
//   }
//   if (check !== -1) {
//     todoList.splice(check, 1);
//   } else {
//     console.log(`Trong mang khong co id ${id}`);
//   }
// }
// removeTodo(5);
// console.log(todoList);
// ==================================================================================

// 7. [Thực hành] Luyện tập và thao tác đối tượng trong object
// Hướng dẫn tạo đối tượng và sử dụng các phương thức để thêm, sửa, xóa và in ra đối tượng sau khi thay đổi chúng
// Bước 1: Tạo đối tượng players có các thuộc tính và giá trị như sau
// let players = {
//   name: "Messi",
//   age: 30,
//   nation: "Argentine",
//   club: "PSG",
// };
// //   Bước 2: Thêm thuộc tính email với giá trị bất kỳ cho đối tượng players và in ra
// // Sử dụng cú pháp: [tên đối tượng].[email] = “giá trị muốn thêm”
// // Hiển thị kết quả đối tượng
// players.email = "123@gmail.com";
// console.log(players);
// // Bước 3: Thay đổi giá trị thuộc tính “club” thành “Barcelona” và in ra toàn bộ các cặp key, value của đối tượng players
// players.club = "Barcelona";
// let keyvalue = Object.entries(players);
// console.log(keyvalue);

// // Bước 4: Xóa thuộc tính age và in lại đối tượng players
// delete players.age;
// console.log(players);

// ==================================================================================

// [Bài tập] LUYỆN TẬP VỚI OBJECT (Tổng hợp)

// Bài 1: Cho mảng như sau:

// let products = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// Copy
// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”

// Xóa đối tượng có id là 2

// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0

// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không? Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
// let products = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// let sf4 = { id: 4, name: "cookie", count: 200 };
// products.push(sf4);

// function confirmId(id) {
//   let index = products.findIndex((e) => e.id == id);
//   return index;
// }
// products.splice(confirmId(2), 1);
// console.log(products);

// products[confirmId(3)].count = 0;
// console.log(products);

// function confirName(name) {
//   let index = products.findIndex((e) => e.name == name);
//   return index;
// }

// let check = confirName("Butter");
// // console.log(check);
// if (check !== -1) {
//   console.log(products[check]);
// } else {
//   console.log("Không có dữ liệu bạn tìm kiếm");
// }

// let students = [
//   { name: "linh", age: 28 },
//   { name: "huong", age: 24 },
//   { name: "hung", age: 25 },
// ];
// // tra ra index cua cac phan thu co value cuar age >25
// let result = students.filter((student) => student.age > 25);
// console.log(result);

// }
// ==================================================================================
// Bài 2: Tạo một class Dog có những thuộc tính:
// class Dog
// Tên và tốc độ di chuyển

// Có khả năng thực hiện sủa

// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn

// Tạo class Cat có những thuộc tính sau:

// Tên và tốc dộ di chuyển
// class Dog {
//   constructor(name, speed, bark) {
//     this.name = name;
//     this.speed = speed;
//     this.bark = true;
//   }
//   catchCat() {
//     if (Dog.speed > Cat.speed) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// class Cat extends Dog {
//   constructor(name, speed) {
//     super(name, speed);
//   }
// }
// ==================================================================================

// Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại. Tạo class Admin kế thừa từ class User. Thêm thuộc tính “role” vào 2 đối tượng Admin (value=1) và User (value =0)
// class User {
//   constructor(name, email, address, tel) {
//     this.name = name;
//     this.email = email;
//     this.address = address;
//     this.tel = tel;
//   }
// }
// class Admin extends User {
//   constructor(name, email, address, tel, salary) {
//     super(name, email, address, tel);
//     this.salary = salary;
//   }
// }
// User.prototype.role = 0;
// Admin.prototype.role = 1;

// const userList = [];
// let Admin1 = new Admin("Trung", "trung@gmail.com", "HCM", "0123456789", 1000);
// let user1 = new User("Lan", "lan@gmail.com", "Ha Noi", 1);
// let user2 = new User("Cuc", "cuc@gmail.com", "Ha Nam", 2);
// let user3 = new User("Hong", "hong@gmail.com", "Ha Tinh", 3);

// userList.push(user1, user2, user3, Admin1);
// console.log(userList);
// let inputUserName = prompt("Moi ban nhap vao name can xoa").toLowerCase();

// let findIndex = userList.findIndex(
//   (e) => e.name.toLowerCase() == inputUserName
// );
// // console.log(findIndex);
// if (findIndex == -1) {
//   console.log("Khong co user la ten can xoa");
// } else {
//   if (userList[findIndex].role == 1) {
//     console.log("Day la admin khong the xoa");
//   } else {
//     userList.splice(findIndex, 1);
//   }
// }
// console.log(userList);

// khoa chính, đặc đieem đặc trưng xác định database

// Tạo danh sách người dùng (dạng mảng) và thêm vào 3 user, 1 admin

// Xóa người dùng thông qua tên của họ (không xóa được admin)

// Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)

// Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra

// ==================================================================================

// Bài 4: Tạo dữ liệu để có thể in ra nội dung dưới đây:

// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành. Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên

// R – In ra toàn bộ các khóa học theo mẫu trên

// U – Hỏi người dùng vị trí update khóa học. Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới. Update xong in lại như trên

// D – Hỏi người dùng vị trị của khóa học muốn xóa. Tiến hành xóa và in ra như trên

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
// ==================================================================================

// Bài 5: Cho mảng như sau:
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// let stores = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// let carts = [];
// // C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// while (kiTu !== e) {
//   //lam
//   const input = prompt(`
//     Moi ban nhap vao thao tac:
//      C: Mua
//      R: In ra
//      U: Update theo vi tri
//      D: Delete
//      E: Thoat
//      `).toLocaleLowerCase();

//   function inThongTin() {
//     console.log(`Stores: ${stores}`);
//     console.log(`Cart: ${carts}`);

//     switch (input) {
//       case "c":
//         const buyItem = prompt("Moi ban nhap vao ten san pham muon mua")
//           .trim()
//           .toLowerCase();

//         const findIndexStores = stores.findIndex(
//           (e) => buyItem == e.name.toLowerCase()
//         );
//         if (findIndex == -1) {
//           alert("Khong tim thay san pham");
//         } else {
//           const buyItemQuantity = +prompt(
//             `Moi ban nhap vao so luong ${buyItem} muon mua tu 1 => ${stores[findIndex].count}`
//           );
//           const findIndexCarts = carts.findIndex(
//             (e) => buyItem == e.name.toLowerCase()
//           );
//           if (findIndexCarts == -1) {
//             const productInputCarts = {
//               ...stores[findIndex],
//               count: buyItemQuantity,
//             };
//             stores[findIndex].count -= buyItemQuantity;
//           } else {
//           }
//         }
//         carts.push(productInputCarts);
//       // ===========================================
//       case "r":
//         inThongTin();
//       // ===========================================
//       case "u":
//       // ===========================================
//       case "d":
//         if (carts > 0) {
//           let viTriXoa = +prompt(
//             `Moi ban nhap vao ten san pham muon xoa tu 1 => ${carts.length}`
//           );
//           carts.splice(viTriXoa - 1, 1);
//           inThongTin();
//         } else {
//           alert(`Gio hag rong`);
//         }
//       // ===========================================
//       case "e":
//       // ===========================================
//       case "":
//     }
//     input = prompt(`
//     Moi ban nhap vao thao tac:
//      C: Mua
//      R: In ra
//      U: Update theo vi tri
//      D: Delete
//      E: Thoat
//      `).toLocaleLowerCase();
//   }
// }

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
// Bài 5: Cho mảng như sau:
// let stores = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// let carts=[]
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// C – Cho người dùng nhập vào tên sản phẩm muốn mua.
// Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts.
// Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo.
// Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi
// chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

// Bước 1: Xác định yêu cầu bài toán
// - Cho: hai mảng dữ liệu
// - Yêu cầu: viết chương trình nhập từ khóa, mỗi từ khóa sẽ thực hiện làm một việc gì đó, việc này sẽ có
//            ảnh hưởng đến dữ liệu trong hai mảng

// Bước 2: chữa bài
// let stores = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// let carts = [];

// let kyTu = prompt(
//   `
//   C: Mua theo tên
//   R: In
//   U: Cập nhật theo vị trí
//   D: Xóa theo vị trí
//   E: Thoát
//   `
// ).toLocaleLowerCase();

// function inThongTin() {
//   console.log("Stores: ", stores);
//   console.log("Carts: ", carts);
// }

// while (kyTu !== "e") {
//   switch (kyTu) {
//     case "r":
//       inThongTin();
//       break;
//     case "d":
//       if (carts.length > 0) {
//         const viTriXoa = +prompt(
//           `Nhập vị trí bạn muốn xóa: 1 => ${carts.length}`
//         );
//         carts.splice(viTriXoa - 1, 1);
//         inThongTin();
//       } else {
//         alert("Cart rỗng");
//       }
//       break;
//     case "c":
//       const tenSP = prompt("Nhập tên sản phẩm muốn mua").trim().toLowerCase();
//       const viTriSpTrongStore = stores.findIndex(
//         (el) => el.name.toLowerCase() === tenSP
//       );
//       if (viTriSpTrongStore === -1) {
//         alert("Không tìm thấy sản phẩm");
//       } else {
//         const soLuongMua = +prompt(
//           `Nhập số lượng ${tenSP} muốn mua: 1 -> ${stores[viTriSpTrongStore].count}`
//         );

//         const viTriSpTrongCart = carts.findIndex(
//           (el) => el.name.toLocaleLowerCase() === tenSP
//         );
//         if (viTriSpTrongCart === -1) {
//           const spDuaVaoCart = {
//             id: stores[viTriSpTrongStore].id,
//             name: stores[viTriSpTrongStore].name,
//             count: soLuongMua,
//           };
//           // const spDuaVaoCart = {
//           //     ...stores[viTriSpTrongStore],
//           //     count: soLuongMua
//           // }
//           carts.push(spDuaVaoCart);
//         } else {
//           carts[viTriSpTrongCart].count += soLuongMua;
//         }

//         stores[viTriSpTrongStore].count -= soLuongMua;
//         inThongTin();
//       }
//       break;
//     case "u":
//       const vitriUdate = +prompt(`Nhập vị trí cần sửa: 1 -> ${carts.length}`);
//       const soLuongUpdate = +prompt("Nhập số lượng cần cập nhật");
//       carts[vitriUdate - 1].count = soLuongUpdate;
//       inThongTin();
//       break;
//   }

//   kyTu = prompt(
//     `
//       C: Mua theo tên
//       R: In
//       U: Cập nhật theo vị trí
//       D: Xóa thoe vị trí
//       E: Thoát
//       `
//   ).toLocaleLowerCase();
// }

//
//
//
//
// class User {
//   constructor(id, username, email, password) {
//     (this.id = id),
//       (this.username = username),
//       (this.email = email),
//       (this.password = password),
//       (this.role = 0);
//   }
// }
// class Admin extends User {
//   constructor(id, username, email, password) {
//     super(id, username, email, password);
//     this.role = 1;
//   }
// }
// let userList = [];
// const user1 = new User(1, "huong", "huong@gmail.com", "123");
// const user2 = new User(2, "ngoc", "ngoc@gmail.com", "234");
// const user3 = new User(3, "linh", "linh@gmail.com", "456");
// const user4 = new User(4, "yen", "yen@gmail.com", "567");
// const admin = new Admin(5, "minh", "minh@gmail.com", "789");
// userList.push(user1, user2, user3, user4, admin);

// let inputEmail = prompt("Moi ban nhap vao email");
// let inputPassword = prompt("Moi ban nhap vao password");
// let findIndex = userList.findIndex(
//   (person) => person.email == inputEmail && person.password == inputPassword
// );
// console.log(findIndex);
// if (findIndex == -1) {
//   console.log("email va password khong dung");
// } else {
//   if (userList[findIndex].role == 1) {
//     console.log("Chao mung ban den voi trang admin");
//   } else {
//     console.log(`Xin chao ${userList[findIndex].username}`);
//   }
// }
// ==============================================================
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
// R – In ra toàn bộ các sản phẩm trong stores và carts
// U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

//STORE
// KHO lưu trữ dữ liệu dạng mô phỏng
let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
//CARTS
let carts = [];
let loop = true;

while (loop) {
  let command = prompt("Moi ban nhap vao C R U D E để mua hang");
  switch (command) {
    case "c":
      // C – Cho người dùng nhập vào tên sản phẩm muốn mua.
      // Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
      let nameProduct = prompt(
        `Moi ban nhap ten san pham muon mau`
      ).toLowerCase();
      let findIndex = stores.findIndex(function (element) {
        return element.name.toLowerCase() === nameProduct;
      });

      if (findIndex === -1) {
        console.log(
          `Khong tim thay san pham ${nameProduct} trong cua hang. Moi ban tiep tuc mua`
        );
      } else {
        console.log(`Mua hang thanh cong`);
        console.log(stores);
        let cartsIndex = carts.findIndex(function (element) {
          return element.name.toLowerCase() === nameProduct;
        });

        if (cartsIndex === -1) {
          // let product = stores[findIndex];
          // tinh chat kieu du lieu tham chieu
          // product.count = 1;
          let cartProduct = { ...stores[findIndex], count: 1 };
          carts.push(cartProduct);
        } else {
          carts[cartsIndex].count += 1;
        }
        stores[findIndex].count -= 1;
      }
      displayProduct(stores);
      displayProduct(carts);
    // break;
    // ==============================================================
    case "r":
      // R – In ra toàn bộ các sản phẩm trong stores và carts
      displayProduct(stores);
      if (carts.length == 0) {
        console.log("Gio hang cua ban chua co gi. Moi tiep tuc mua hang");
      } else {
        displayProduct(carts);
      }
      break;
    // ==============================================================
    case "u":
      console.log("San pham nam trong store");
      displayProduct(carts);
      // U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào
      // số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
      let updateIndex = prompt("Ban muon update lai sf no trong gio hang");
      let oldCart = carts[updateIndex - 1].count;
      console.log(carts[updateIndex - 1].count);
      // validate du lieu dau vao
      carts[updateIndex - 1].count = +prompt(
        ` Moi ban nhap vao so luong moi cua san pham ${
          carts[updateIndex - 1].name
        }`
      );
      //tim kiem sf vua update trong cart laf sf nap trong stores
      let storeIndex = stores.findIndex(function (element, index) {
        return element.id === carts[updateIndex - 1].id;
      });
      stores[storeIndex].count =
        stores[storeIndex].count + oldCart - carts[updateIndex - 1].count;
      console.log(`San pham trong gio hang`);
      displayProduct(carts);
      console.log(`San pham trong store`);
      displayProduct(stores);

      break;
    // ==============================================================
    case "d":
      // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
      console.log(`San pham trong store`);
      displayProduct(stores);
      console.log(`San pham trong gio hang`);
      displayProduct(carts);
      let deleteIndex = +prompt(" Ban muon xoa san pham nao khoi cart");
      let deleteProductId = carts[deleteIndex - 1].id;
      carts.splice(deleteIndex - 1, 1);

      let deleteStoreIndex = stores.findIndex(
        (product) => product.id === deleteProductId
      );
      stores[deleteStoreIndex].count = 100;
      console.log(`San pham trong gio hang`);
      displayProduct(carts);
      console.log(`San pham trong store`);
      displayProduct(stores);
      break;
    // ==============================================================
    case "e":
      console.log("Cam on ban da mua hang");

      loop = false;
      // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào
      // E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
      break;
    // ==============================================================

    // ==============================================================
    default:
      break;
  }
}
function displayProduct(where) {
  for (let index in where) {
    console.log(
      `${+index + 1}.${where[index].name} - quantity${where[index].count}`
    );
  }
}

// let y = { name: "hello" };
// // Shallow clone
// let z = y;
// // Deep clone
// let x = { ...y };

// z.name = "bien z";
// console.log(y);
