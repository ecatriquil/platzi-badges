import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function useSearchBadges(badges) {
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.laststName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredBadges(result);

    }, [badges, query]);

    return [query, setQuery, filteredBadges];
}


function BadgesList(props) {
    const badges = props.badges;
    const [query, setQuery, filteredBadges] = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value) }}
                    />
                </div>
                <h3>No badge were found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new Badge
                </Link>
            </div>
        )
    }

    return (
        <div>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <p>{badge.firstName} {badge.lastName}</p>
                            </Link>
                        </li>
                    )
                })
                }
            </ul >
        </div>
    )
}

export default BadgesList;