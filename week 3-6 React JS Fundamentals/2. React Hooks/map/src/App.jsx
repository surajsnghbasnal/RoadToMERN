import React from 'react'
import { Table } from 'react-bootstrap'

const App = () => {
    const students = [
        {
            name: "Rohan Sharma",
            rollNo: 1,
            email: "rohan.sharma01@example.com",
            address: [
                {
                    houseNo: "123",
                    city: "Mumbai",
                    country: "India",
                },
                {
                    houseNo: "456",
                    city: "Delhi",
                    country: "India",
                },
            ],
        },
        {
            name: "Priya Verma",
            rollNo: 2,
            email: "priya.verma02@example.com",
            address: [
                {
                    houseNo: "78A",
                    city: "Bangalore",
                    country: "India",
                },
                {
                    houseNo: "90B",
                    city: "Hyderabad",
                    country: "India",
                },
            ],
        },
        {
            name: "Ankit Gupta",
            rollNo: 3,
            email: "ankit.gupta03@example.com",
            address: [
                {
                    houseNo: "201",
                    city: "Jaipur",
                    country: "India",
                },
            ],
        },
        {
            name: "Sneha Patil",
            rollNo: 4,
            email: "sneha.patil04@example.com",
            address: [
                {
                    houseNo: "33C",
                    city: "Pune",
                    country: "India",
                },
                {
                    houseNo: "45D",
                    city: "Nagpur",
                    country: "India",
                },
            ],
        },
        {
            name: "Aditya Jain",
            rollNo: 5,
            email: "aditya.jain05@example.com",
            address: [
                {
                    houseNo: "12",
                    city: "Ahmedabad",
                    country: "India",
                },
            ],
        },
        {
            name: "Kavya Iyer",
            rollNo: 6,
            email: "kavya.iyer06@example.com",
            address: [
                {
                    houseNo: "506",
                    city: "Chennai",
                    country: "India",
                },
            ],
        },
        {
            name: "Manish Kumar",
            rollNo: 7,
            email: "manish.kumar07@example.com",
            address: [
                {
                    houseNo: "405",
                    city: "Lucknow",
                    country: "India",
                },
                {
                    houseNo: "67B",
                    city: "Kanpur",
                    country: "India",
                },
            ],
        },
        {
            name: "Pooja Reddy",
            rollNo: 8,
            email: "pooja.reddy08@example.com",
            address: [
                {
                    houseNo: "81C",
                    city: "Vishakhapatnam",
                    country: "India",
                },
            ],
        },
        {
            name: "Rahul Singh",
            rollNo: 9,
            email: "rahul.singh09@example.com",
            address: [
                {
                    houseNo: "112A",
                    city: "Patna",
                    country: "India",
                },
            ],
        },
        {
            name: "Neha Chaudhary",
            rollNo: 10,
            email: "neha.chaudhary10@example.com",
            address: [
                {
                    houseNo: "91D",
                    city: "Kolkata",
                    country: "India",
                },
                {
                    houseNo: "77E",
                    city: "Bhubaneswar",
                    country: "India",
                },
            ],
        },
    ];



    return (

        <div>
            <h2>App components</h2>
            <h1>Students List.</h1>
            <Table striped variant='dark' bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.rollNo}</td>
                                <td>{item.email}</td>
                                <td>{
                                    item.address.map((data) =>
                                        <Table variant='dark'>
                                            <tbody>
                                                <tr>
                                                    <td>{data.houseNo}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    )
                                }</td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default App
