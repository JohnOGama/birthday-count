function BirthdayList({ people }) {
  return (
    <>
      <h1>Birthday List Today</h1>
      {people.map((person) => {
        const { name, age, id, image } = person;
        return (
          <div key={id} className="flex ">
            <img src={image} alt={name} className="w-20 mb-5" />
            <div className="flex flex-col ml-5">
              <h1 className="font-bold mt-2 text-2xl">{name}</h1>
              <h1 className="font-medium ">{age} years old</h1>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BirthdayList;
