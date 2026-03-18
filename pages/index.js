import React from 'react';

const Homepage = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#bible-study">Bible Study</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#twitch">Twitch</a></li>
                    <li><a href="#youtube">YouTube</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section id="about">
                <h1>About</h1>
                <p>This is the about section.</p>
            </section>
            <section id="bible-study">
                <h1>Bible Study</h1>
                <p>This is the bible study section.</p>
            </section>
            <section id="books">
                <h1>Books</h1>
                <p>This is the books section.</p>
            </section>
            <section id="shop">
                <h1>Shop</h1>
                <p>This is the shop section.</p>
            </section>
            <section id="twitch">
                <h1>Twitch</h1>
                <p>This is the twitch section.</p>
            </section>
            <section id="youtube">
                <h1>YouTube</h1>
                <p>This is the youtube section.</p>
            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>This is the contact section.</p>
            </section>
        </div>
    );
};

export default Homepage;