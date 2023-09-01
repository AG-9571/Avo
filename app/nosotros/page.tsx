export default function Nosotros (){
    return(
        <main className="mt-11 grid grid-cols-8">
            <div className=" overflow-hidden col-start-1 col-end-9 h-[300px]">
                <img className="w-full" src="./images/avocados.jpg" alt="imagen Avocatos" />
            </div>
            <div className="mx-3 mb-10 col-start-3 col-end-7">
                <h1 className=" my-10 font-semibold text-7xl text-center">Nosotros</h1>
                <section className=" mb-5 mt-10 grid grid-cols-2 gap-8 ">
                    <div>
                        <h2 className="font-semibold text-xl mb-4 flex items-center"> <span className=" mr-4 text-gray-400 font-semibold text-6xl">1</span> Most avocados come from Mexico.</h2>
                        <p className="text-justify">While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-4 flex items-center"> <span className=" mr-4 text-gray-400 font-semibold text-6xl">2</span> The conquistadors were huge fans.</h2>
                        <p className="text-justify">Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-4 flex items-center"> <span className="mr-4 text-gray-400 font-semibold text-6xl">3</span> “Avocado” wasn’t its original name.</h2>
                        <p className="text-justify">Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-4 flex items-center"> <span className="mr-4 text-gray-400 font-semibold text-6xl">4</span> It’s actually a fruit.</h2>
                        <p className="text-justify">Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-4 flex items-center"> <span className="mr-4 text-gray-400 font-semibold text-6xl">5</span> There’s a secret trick to ripening them up quick</h2>
                        <p className="text-justify">Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.</p>
                    </div>

                </section>
            </div>
        </main>
    )
}