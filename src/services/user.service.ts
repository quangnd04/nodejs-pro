import getConnection from 'config/db';

const handleCreateUser = async (name: string, email: string, address: string) => {
  const connection = await getConnection();
  try {
    const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
    const values = [name, email, address];

    const [result] = await connection.execute(sql, values);
    return result;
  } catch (error) {}
};

const getAllUsers = async () => {
  const connection = await getConnection();
  try {
    const [results] = await connection.query('SELECT * FROM `users`');
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
  return 'hello';
};

export {handleCreateUser, getAllUsers};
