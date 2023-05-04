const data = {
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "phone": {
      "home": "555-1234",
      "work": "555-5678"
    },
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    "education": [
      {
        "degree": "Bachelor's",
        "major": "Computer Science",
        "school": "University of California, Berkeley",
        "year": 2014
      },
      {
        "degree": "Master's",
        "major": "Information Technology",
        "school": "Stanford University",
        "year": 2016
      }
    ]
  }
  
  console.log(data)
  console.log('Name:', data.name);
  console.log ('age:', data.age)
  console.log ('email:', data.email)
  console.log ('home phone:', data.phone.home)  
  console.log ('work phone:', data.phone.work)  
  console.log ('street address:', data.address.street)
  console.log ('city:', data.address.city)
  console.log ('state:', data.address.state)
  console.log ('zip code:', data.address.zip)
  console.log ('degree:', data.education[1].degree)

  

  
  

    