import React from 'react';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badge were found</h3>
                    <Link to="/badges/new" className="btn btn-primary">
                        Create new Badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                <p>{badge.firstName} {badge.lastName}</p>
                            </Link>
                        </li>
                    )
                })
                }
            </ul >
        )
    }
}

export default BadgesList;