# MesMusic Database

## Start

If you want to create mesmusic database - you must enter this commands in your postgres terminal :

 1. Enter to default postgres user

 2. Create new user 'mesuser'

 ```sql
CREATE USER mesuser PASSWORD '1111';
ALTER ROLE mesuser createrole createdb;
 ```

 3. Go over and select a new 'mesuser'

 4. Navigate to the directory with this file

 ```sql
\cd your_path_to_this_file/MesMusic/database
 ```

 5. Create this database with the command

 ```sql
\ir mesDBstart.sql
 ```

 6. You can now work with the database

## Datalogic model

![datalogic model](https://github.com/BohdanShmalko/MesMusic/blob/messageBack/database/newDatabase.png)
