function Hello({ name, address, changeName }) {
    return (
      <h1>
        Hello {name} in {address}
        <br />
        <button
          onClick={function () {
            if(name == "Vinca")
            changeName("JY");
            else 
            changeName("Vinca");
          }}
        >
          이름 바꾸기
        </button>
      </h1>
    );
  }

  export default Hello;