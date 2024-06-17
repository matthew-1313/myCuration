# myCuration - Create Your Own Exhibits

### Purpose

This application is designed to let art lovers browse and cultivate artworks for their own online exhibits.

### Features

Users can enter keywords to search through the artworks featured on the 'Harvard Art Museums' & 'Metropolitan Museum of Art' APIs. Up to 8 artworks can be added to a virtual 'Wall' to create an exhibit of their own. Artworks on the wall can be interacted with to learn more about the piece and where it can be viewed in person.

### Challenges

Real world time constraints, and some rusty JavaScript skills. Unfortuntely the current look of the application is not what I had set out to create, but due to the time constraint, I prioritised writing the code to function as I wanted, with the intention of coming back to the visual layouts/css files in future.

### Future Considerations

The look of the application will be far prettier, styled to emulate a real museum feel.

Upcoming versions of the application will allow users to search the APIs in more depth (artist, art type, title), and filter the results either by date or alphabetically.

Users will also have the option for multiple Exhibit Walls to polutate with their favourite artworks.

The 'Additional Information' section for the Exhibit works will feature more detail for each artwork.

## How to Install and Run the Project

To run the application locally, you will need to clone the repo:

`git clone https://github.com/matthew-1313/myCuration.git`

Once cloned, navigate to the 'myCuration' folder and install the necessary dependencies:

`npm install`

This should update your local repo with the dependencies needed to run the application. Those dependencies are:

<ul>
<li>Axios 1.7.2</li>
<li>Express 4.19.2</li>
<li>React 18.2.0</li>
<li>React-Dom 18.2.0</li>
<li>React-Router-Dom 6.23.1</li>
</ul>

## How to Navigate the Application

Users can click the 'Search' tab on the navigation bar to reach the search page.

Enter keywords for your desired Exhibition theme and hit 'Search', the results will appear below as images.

Click the '+' button below an image to add it to your Wall. Up to 8 artworks can be added per Wall.

Navigate to the Wall tab to see your chosen artworks hanging on your wall.

Clicking an image will load a detailed description of the artwork below, including where the user can see the artwork in person.

## Credits

Made by Matthew Mathieson

github: https://github.com/matthew-1313
