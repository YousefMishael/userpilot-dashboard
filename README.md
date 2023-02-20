# Userpilot Dashboard Assessment Task

This project uses MUI, React-Router-DOM 3rd party libraries and context for showing dialog inside website from any component

First of all all of pages except Overview page are imported lazily to make building js file at first render faster

General Components created inside Project:
1- Sidebar
2- Header
3- Table
4- Loading (for fallback func.)

Sidebar component detects active tab using useLocation hook from react-router-dom

# Usage of Header, Table and Slider Components

# Header Component:

It takes just one prop: title
It shows the title of page, for username and image we can take it from context if there was an auth part

# Table Component:

It takes 4 props: defaultRowsNum, headers, data, getData
1- defaultRowsNum: shows number of rows will be initialized at first render, it will stay static if the user doesn't change it. TYPE=NUMBER
2- headers: it shows shows the titles which will be rendered on screen. TYPE=ARRAY_OF_STRING
3- data: its the body of the table, it's a component to make customization of row appearence more easy while using table component at different locations. TYPE=COMPONENT
4- getData: This function will be called when user executes an action from action section at bottom of table. TYPE=FUNCTION

# Slider Component:

- Inside Slider Component there is just a container div, inside this container we render a customized content which be passed from the props
- The Slider component added to MainLayout file to make access to it possible from any component inside this project
- We use React context to control this component.
  -This component takes two props (which will be passed using context to MainLayout state and to this component using props):
  1- Open: to decide which action needed showing or hiding
  2- Content: it a customized component as requested (this is the slider body).
- Slider body is a separated component to make showing slider body dynamic as requested from any location of this project
