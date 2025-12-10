function FavoriteHobbies({ hobbies }) {
  const favoriteHobbies = hobbies.filter((hobby) => hobby.isFavorite);

  return (
    <div className="favorite-hobbies">
      <h2>Favorite Hobbies</h2>
      {favoriteHobbies.length === 0 ? (
        <div className="empty-state">
          <p>No favorite hobbies yet. Mark some hobbies as favorites!</p>
        </div>
      ) : (
        favoriteHobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-item favorite">
            <span className="hobby-name">{hobby.name}</span>
            <span className="favorite-star">★</span>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteHobbies;
