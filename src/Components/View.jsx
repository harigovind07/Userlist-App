import React, { useState} from 'react'

const View = () => {
    const [data, changeData] =useState(
        [
                {
                    "id": 1,
                    "name": "Alice Johnson",
                    "username": "alicej",
                    "email": "alice.johnson@example.com",
                    "phone": "+1234567890",
                    "website": "alicejohnson.com"
                  },
                  {
                    "id": 2,
                    "name": "Bob Smith",
                    "username": "bobsmith",
                    "email": "bob.smith@example.com",
                    "phone": "+1987654321",
                    "website": "bobsmith.io"
                  },
                  {
                    "id": 3,
                    "name": "Emma Davis",
                    "username": "emmad",
                    "email": "emma.davis@example.com",
                    "phone": "+1122334455",
                    "website": "emmadavis.net"
                  },
                  {
                    "id": 4,
                    "name": "James Brown",
                    "username": "jamesb",
                    "email": "james.brown@example.com",
                    "phone": "+1555098765",
                    "website": "jamesbrown.org"
                  },
                  {
                    "id": 5,
                    "name": "Sophia Wilson",
                    "username": "sophiaw",
                    "email": "sophia.wilson@example.com",
                    "phone": "+1789456123",
                    "website": "sophiawilson.io"
                  },
                  {
                    "id": 6,
                    "name": "Matthew Taylor",
                    "username": "mattt",
                    "email": "matthew.taylor@example.com",
                    "phone": "+1654321897",
                    "website": "matthewtaylor.com"
                  },
                  {
                    "id": 7,
                    "name": "Olivia Clark",
                    "username": "oclark",
                    "email": "olivia.clark@example.com",
                    "phone": "+1888777666",
                    "website": "oliviaclark.net"
                  },
                  {
                    "id": 8,
                    "name": "Jack Martinez",
                    "username": "jackm",
                    "email": "jack.martinez@example.com",
                    "phone": "+1777888999",
                    "website": "jackmartinez.org"
                  },
                  {
                    "id": 9,
                    "name": "Isabella Adams",
                    "username": "isabella_a",
                    "email": "isabella.adams@example.com",
                    "phone": "+1999888777",
                    "website": "isabellaadams.com"
                  },
                  {
                    "id": 10,
                    "name": "Noah Miller",
                    "username": "noahm",
                    "email": "noah.miller@example.com",
                    "phone": "+1888999000",
                    "website": "noahmiller.io"
                  }
        ]
        )
    return (
        <div>
            <div className="container">
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Userlist App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">View</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col"><b>Sl.No</b></th>
                                                    <th scope="col"><b>Name</b></th>
                                                    <th scope="col"><b>Username</b></th>
                                                    <th scope="col"><b>E-mail</b></th>
                                                    <th scope="col"><b>Phn No.</b></th>
                                                    <th scope="col"><b>Website</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map(
                                                        (value, index) => {
                                                            return <tr>
                                                                <th scope="row">{value.id}</th>
                                                                <td>{value.name}</td>
                                                                <td>{value.username}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.phone}</td>
                                                                <td>{value.website}</td>
                                                            </tr>
                                                        })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
