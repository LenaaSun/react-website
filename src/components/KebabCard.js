// ...existing code...
import React from "react";
import "./KebabCard.css";

export default function KebabCard({ kebab }) {
  return (
    <div className="kebab-card">
      <div className="kebab-header">
        <h3 className="kebab-name">{kebab.name}</h3>
        <span className="kebab-price">${kebab.price}</span>
      </div>

      <div className="kebab-meta">
        {kebab.isVegetarian ? (
          <span className="kebab-veg">Vegetarian</span>
        ) : (
          <span className="kebab-nonveg">Non-veg</span>
        )}
      </div>

      {kebab.ingredients && kebab.ingredients.length > 0 ? (
        <ul className="kebab-ingredients">
          {kebab.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      ) : (
        <div className="kebab-ingredients empty">No ingredients listed</div>
      )}
    </div>
  );
}
