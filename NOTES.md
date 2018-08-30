Rails App - Notes
Objective: 

- To create a Ruby on Rails application that allows users to book a co-working space from an available list of spaces.
     
- Admin can add workspaces, non-admin users cannot add workspaces 
     
Models:

Building
        - Location Name
        - Address
        
User
        - Name
        - Age 
        - Email 
        - Password_Digest
        - Admin 
    
Workspace
        - type
        - availablilty (boolean)
        - building_id 
        
Users_workspace (Booking/Reservation)
        - Booking date
        - Booking time 
        - Booking duration 
        - user_id
        - workspace_id 
        
Associations

WorkSpace 
        - belongs to Building
        - belongs to User
    
Building 
    Has many workspaces 
    
User 
    has many workspaces, through users_workspace
    has many users_workspace
    
User_workspace
    belongs to user
    belongs to workspace
        
Project Requirements:

X    Use the Ruby on Rails framework.

X    Your models must include a has_many, a belongs_to, and a has_many :through relationship. You can include more models to fill out your domain, but there must be at least a model acting as a join table for the has_many through. Also, make sure that the join table contains at least one user submittable attribute; for example: rides with tickets or appointments with times.

X    Your models should include reasonable validations for the simple attributes. You don't need to add every possible validation or duplicates, such as presence and a minimum length, but the models should defend against invalid data.

X    You must include at least one class level ActiveRecord scope methods. To some extent these class scopes can be added to power a specific individual feature, such as "My Overdue Tasks" in a TODO application, scoping all tasks for the user by a datetime scope for overdue items, @user.tasks.overdue. Reports make for a good usage of class scopes, such as "Most Valuable Cart by Customer" where the code would implement a Cart.most_valuable and Cart.by_customer which could be combined as Cart.most_valuable.by_customer(@customer). -- bookings - order by date 

X   Your application must provide a standard user authentication, including signup, login, logout, and passwords. You can use Devise but given the complexity of that system, you should also feel free to roll your own authentication logic.

X    Your authentication system should allow login from some other service. Facebook, twitter, foursquare, github, etc...

X    You must make use of a nested resource with the appropriate RESTful URLs. Additionally, your nested resource must provide a form that relates to the parent resource. Imagine an application with user profiles. You might represent a person's profile via the RESTful URL of /profiles/1, where 1 is the primary key of the profile. If the person wanted to add pictures to their profile, you could represent that as a nested resource of /profiles/1/pictures, listing all pictures belonging to profile 1. The route /profiles/1/pictures/new would allow me to upload a new picture to profile 1. Focus on making a working application first and then adding more complexity. Making a nested URL resource like '/divisions/:id/teams/new' is great. Having a complex nested resource like 'countries/:id/sports/:id/divisions/:id/teams/new' is going to make this much harder on you.

X    Your forms should correctly display validation errors. Your fields should be enclosed within a fields_with_errors class and error messages describing the validation failures must be present within the view. (.errors)

X    Your application must be, within reason, a DRY (Do-Not-Repeat-Yourself) rails app. Logic present in your controllers should be encapsulated as methods in your models. Your views should use helper methods and partials to be as logic-less as possible. Follow patterns in the Rails Style Guide and the Ruby Style Guide.

X    Do not use scaffolding to build your project. Your goal here is to learn. Scaffold is a way to get up and running quickly, but learning a lot is not one of the benefits of scaffolding. That’s why we do not allow the use of scaffolding for projects.