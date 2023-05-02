


const SingleChef = ({chef}) => {
    const {chef_name, chef_picture} =chef;
    return (
      <div style={{borderRadius: 0}} className="card md:h-56 lg:card-side bg-orange-50 text-gray-600 shadow-xl">
      <figure><img src={chef_picture} className="w-full h-full" alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    );
};

export default SingleChef;