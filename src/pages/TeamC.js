import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import { Icon } from 'react-fa';

class TeamC extends Component {
  render() {
    return (
        <Table striped className="teamC">
            <thead className="tableHeaders">
                <tr>
                <th>team member</th>
                <th>contribution</th>
                <th>owner</th>
                <th>contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Yian Chen</td>
                <td>Testing - Developer</td>
                <td>Listings Owner - Registration</td>
                <td>
                    <a href="https://www.linkedin.com/in/yian-chen-1b8b40135/" target="_blank" rel="noopener noreferrer">
                        <Icon name="brand" className="fa fa-linkedin-square icons" size={'2x'} />
                    </a>
                </td>
                </tr>

                <tr>
                <td>Brooke Dedrickson</td>
                <td>UX/UI - Search Results Developer</td>
                <td>Search Results</td>
                <td>
                    <a href="https://www.linkedin.com/in/brooke-d-181359a6/" target="_blank" rel="noopener noreferrer">
                        <Icon name="brand" className="fa fa-linkedin-square icons" size={'2x'} />
                    </a>
                </td>
                </tr>

                <tr>
                <td>Terry Eggebrecht</td>
                <td>Team Lead - Developer</td>
                <td>Home</td>
                <td>
                    <a href="https://www.linkedin.com/in/terry-e-3184aa55/" target="_blank" rel="noopener noreferrer">
                        <Icon name="brand" className="fa fa-linkedin-square icons" size={'2x'} />
                    </a>
                </td>
                </tr>

                <tr>
                <td>David Georgiyev</td>
                <td>UX/UI - Developer</td>
                <td>Direct Messaging/Comments UI</td>
                <td>
                    <a href="https://www.linkedin.com/in/david-georgiyev-724467186/" target="_blank" rel="noopener noreferrer">
                        <Icon name="brand" className="fa fa-linkedin-square icons" size={'2x'} />
                    </a>
                </td>
                </tr>

                <tr>
                <td>Lee Hoang</td>
                <td>UX/UI - Developer</td>
                <td>Profile</td>
                <td>
                </td>
                </tr>

                <tr>
                <td>Bradley Odell</td>
                <td>Chief Architect - Developer</td>
                <td>Project Architecture</td>
                <td>
                </td>
                </tr>

                <tr>
                <td>Daniel Persson</td>
                <td>Product Owner - Developer</td>
                <td>Direct Messaging/Comments Backend</td>
                <td>
                </td>
                </tr>

                <tr>
                <td>Doanh Tran Caraballo</td>
                <td>Research - Developer</td>
                <td>Calendar</td>
                <td>
                </td>
                </tr>

            </tbody>
        </Table>

    );
  }
}

export default TeamC;