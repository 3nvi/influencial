## What are they

Containers are React entities that have knowledge of the store and are
responsible for passing data to components and deciding when to re-render 
when the store changes

## Structure
1) Any containers should be defined in their own **.jsx** files
2) Each file must be PascalCased ( i.e. MyTestContainer )
3) Instances of these classes must be CamelCased (i.e. myTestContainerInstance)
4) Each container must have an **export default <CONTAINER_NAME>** at the end
