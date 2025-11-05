import getConnection from 'config/db';

const handleCreateUser = async (name: string, email: string, address: string) => {
  try {
    const connection = await getConnection();
    const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
    const values = [name, email, address];

    const [result] = await connection.execute(sql, values);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = 'DELETE FROM `users` WHERE `id` = ?';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);
    console.log(result);
    console.log(fields);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getAllUsers = async () => {
  try {
    const connection = await getConnection();
    const [results] = await connection.query('SELECT * FROM `users`');
    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
  return 'hello';
};

export {handleCreateUser, handleDeleteUser, getAllUsers};
