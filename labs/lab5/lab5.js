
const users = [
    { id: 1, name: 'John Doe', country: 'Afghanistan', email: 'john1@example.com', picture: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Jane Smith', country: 'Albania', email: 'jane2@example.com', picture: 'https://th.bing.com/th/id/R.d5a146e6fc28dce759397f2e8dac8244?rik=J8DvKai00Ui9EQ&pid=ImgRaw&r=0' },
    { id: 3, name: 'Jim Brown', country: 'Algeria', email: 'jim3@example.com', picture: 'https://th.bing.com/th/id/OIF.eGqx7wU3ZFRlaIwQdz5gIw?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Jake White', country: 'Andorra', email: 'jake4@example.com', picture: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Julie Black', country: 'Angola', email: 'julie5@example.com', picture: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Jennifer Green', country: 'Antigua and Barbuda', email: 'jennifer6@example.com', picture: 'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];
  
  let sortOrder = -1; 
  let sortedColumnIndex = null;
  
  function generateTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    data.forEach(user => {
      const row = `<tr>
                    <td>${user.id}</td>
                    <td><img class="user-picture" src="${user.picture}" alt="User Picture">${user.name}</td>
                    <td>${user.country}</td>
                    <td>${user.email}</td>
                    <td><button class="clickButton" onclick="displayModal(${user.id}, '${user.name}')">Click</button></td>
                  </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  function sortTable(columnIndex) {
    const columnHeaders = document.querySelectorAll('th');
    columnHeaders.forEach(header => header.querySelector('.sort-icon').innerHTML = ''); 
  
    const headerIcon = columnHeaders[columnIndex].querySelector('.sort-icon');
    if (sortOrder === 1 && sortedColumnIndex === columnIndex) {
      sortOrder = -1;
      headerIcon.innerHTML = '&#9660;'; 
    } else {
      sortOrder = 1;
      headerIcon.innerHTML = '&#9650;'; 
    }
    sortedColumnIndex = columnIndex;
  
    const sortedData = [...users].sort((a, b) => {
      const valueA = a[Object.keys(a)[columnIndex]];
      const valueB = b[Object.keys(b)[columnIndex]];
      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
      return 0;
    });
  
    generateTable(sortedData);
  }
  
  function displayModal(userId, userName) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    modalText.textContent = `You clicked on the user: ${userName}`;
    modal.style.display = 'block';
  
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }
  
  generateTable(users);
  