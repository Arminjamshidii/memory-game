# React + Vite

Description:
This React application implements a simple card-matching game where players flip cards to find matching pairs. The game utilizes React state management with the useState and useEffect hooks.

Features:
Card Flipping:

Clicking on a card flips it, revealing an image.
Only two cards can be flipped at a time.
Matching Pairs:

If two flipped cards match, they remain open.
Matching is based on the name of the fish associated with each card.
Shuffling:

The game shuffles the order of the cards at the start to provide a different arrangement for each playthrough.
Styling:

CSS Modules are employed for styling, ensuring encapsulation and easy maintenance.
Timeout Effect:

After attempting to match two cards, there is a brief delay before they flip back, allowing players to observe the cards.