import React from "react";
import img from "../../Assets/Images/aboutpageImage/about.jpg";
import img1 from "../../Assets/Images/aboutpageImage/tips.jpg";
import img2 from "../../Assets/Images/aboutpageImage/sugar.jpg";

const About = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-7">
          <h1>How many calories should I eat a day ?</h1>
          <h5>
            When most of us think of calories, we think of how fattening a food
            is. In dietary terms, calories are the amount of energy that a food
            provides.
          </h5>
          <p>
            If we consistently take in more energy than we need, we will gain
            weight. If we take in too little energy, we will lose weight, fat,
            and eventually muscle mass.
          </p>
          <p>
            The definition of a calorie is the amount of energy needed to raise
            the temperature of 1 gram (g) of water through 1° Celsius.
          </p>
          <p>
            The type and amount of food we eat determine how many calories we
            consume. For many people on a weight-loss diet, the number of
            calories in a food is a deciding factor in choosing whether or not
            to eat it.
          </p>
          <p>
            How and when we eat can also make a difference, as the body uses
            energy differently throughout the day. Our body’s energy use will
            depend on how active we are, how efficiently our body uses the
            energy, and our age.
          </p>
          <h3>Fast facts on calorie intake and use</h3>
          <p>
            1. Recommended calorie intake depends on factors such as age, size,
            height, sex, lifestyle, and overall general health.
            <br />
            Recommended 2. daily calorie intakes in the US are around 2,500 for
            men and 2,000 for women.
            <br />
            3. Eating a big breakfast could help with weight reduction and
            maintenance.
            <br />
            4. The brain uses around 20 percent of the energy used in the human
            body. <br />
            5. Factors affecting ideal calorific intake include age, bone
            density, and muscle-fat ratio. <br />
            6. A 500-calorie meal consisting of fruits and vegetables has more
            health benefits and will keep you feeling full for longer than a
            500-calorie snack of pop
          </p>
          <h1>Recommended intake</h1>
          <img src={img} alt="" className="mt-4 img-fluid" />
          <h1>Burning calories</h1>
          <p>For the human body to remain alive, it needs energy.</p>
          <p>
            Around 20 percent of the energy we take in is used for brain
            metabolism. Most of the rest is used in basal metabolism, the energy
            we need when in a resting state, for functions such as blood
            circulation, digestion, and breathing
          </p>
          <p>
            In a cold environment, we need more energy to maintain a constant
            body temperature, as our metabolism increases to produce more heat.
            In a warm environment, we need less energy.
          </p>
          <p>
            Cellular respiration is the metabolic process by which cells get
            energy by reacting oxygen with glucose to produce carbon dioxide,
            water, and energy. How efficiently energy from respiration converts
            into physical—or mechanical— power depends on the type of food
            eaten, the type of physical energy, and whether muscles are used
            aerobically or anaerobically. In other words, we need calories to
            fuel bodily functions, such as breathing and thinking, to maintain
            our posture, and to move around.
          </p>
          <h1>Tips</h1>
          <p>
            Here are some tips for burning energy and losing weight more
            effectively.
          </p>
          <img src={img1} alt="" className="mt-4 img-fluid" />
          <p>
            <strong>1. Eat breakfast:</strong> A protein and healthy fat
            breakfast can keep you full for longer and help prevent snacking
            during the day.
          </p>
          <p>
            <strong>2. Eat regular meals:</strong> This can help you burn
            calories more effectively and helps prevent mindless snacking..
          </p>
          <p>
            <strong>3. Remember your “five-a-day:”</strong>
            Fruits and vegetables can be a tasty snack and they can bulk out
            your meals. They are high in nutrients and fiber and low in calories
            and fat.
          </p>
          <p>
            <strong>4. Eat slow-burning calories:</strong>High-fiber
            carbohydrates, such as legumes, and healthy fats, such as avocado,
            take longer to release energy, so you will not get hungry as
            quickly.
          </p>
          <p>
            <strong>5. Exercise:</strong>This can help burn off extra calories,
            and it can make you feel good. A brisk daily walk is easy for most
            people to do and costs nothing. Challenge yourself with a pedometer.
            For people who use a wheelchair, there are exercises that can boost
            heart health and strength.
          </p>
          <p>
            <strong>6. Drink water:</strong>It is healthful, has no calories,
            and can fill you up. Avoid alcohol and sodas as these can easily
            provide far too many calories. If you crave sweet drinks, choose
            unsweetened fruit juices, or better still, get a juice maker.
          </p>
          <p>
            <strong>7. Eat more fiber: </strong>Fiber, found in fruits,
            vegetables, and wholegrains, can help you feel full and encourage
            healthy digestion.
          </p>
          <p>
            <strong>8. Check the label:</strong>
            Some items have hidden fats or sugars. “Ten percent less fat,” might
            not actually mean very much less fat, and it does not necessarily
            mean that you can eat more of it or that it is really more
            healthful. If you are counting calories, the label will help you
            keep track.
          </p>
          <p>
            <strong>9. Use smaller plates:</strong>Research indicates that
            portion sizes have increasedTrusted Source over the last 3 decades,
            and this may contribute to obesity. Using a smaller plate encourages
            smallerTrusted Source portions.
          </p>
          <p>
            <strong>10. Slow down</strong>Eat slowly and rest between courses or
            extra servings, as it can take 20 to 30 minutes for your body to
            realize it feels full.
          </p>
          <h1>Activities</h1>
          <p>
            Here are some examples of activities and the calories they can help
            you burn in 30 minutes. The estimates are for a person weighing 125
            pounds.
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Activity</th>
                <th scope="col">calorie Burned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lifting weights</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Aqua aerobics</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Walking at 4.5 miles an hour</td>
                <td>150</td>
              </tr>
              <tr>
                <td>General swimming</td>
                <td>180</td>
              </tr>
              <tr>
                <td>Running at 6 miles an hour</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Computer work</td>
                <td>41</td>
              </tr>
              <tr>
                <td>Sleeping</td>
                <td>19</td>
              </tr>
            </tbody>
          </table>
          <h1>Basal metabolic rate</h1>
          <p>Men: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5</p>
          <p>
            Women: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VEQaH4LruUo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h1 className="mt-5">Empty calories</h1>
          <p>
            Empty calories are those that provide energy but very little
            nutritional value. The parts of food that provide empty calories
            contain virtually no dietary fiber, amino acids, antioxidants,
            dietary minerals, or vitamins.
          </p>
          <p>
            According to ChooseMyPlate.gov, a diet management tool from the
            USDA, empty calories come mainly from solid fats and added sugars.
          </p>
          <p>
            <strong>Solid fats:</strong> Although these exist naturally in many
            foods, they are often added during industrial food processing, as
            well as during the preparation of certain foods. Butter is an
            example of a solid fat.
            <br />
            <strong>Added sugars:</strong> These are sweeteners that are added
            to foods and beverages during industrial processing. They are filled
            with calories. In the U.S., the most common types of added sugars
            are sucrose and high-fructose corn syrup.
          </p>
          <p>
            Added sugars and solid fats are said to make foods and drinks more
            enjoyable. However, they also add many calories and are major
            contributors to obesity. Alcohol can also contribute empty calories
            to the diet. One normal serving of beer can add 153 kcal to a
            person’s intake for the day. If beer is not your drink of choice,
            you can use this calorie calculatorTrusted Source provided by the
            National Institute on Alcohol Abuse and Alcoholism to work out how
            many calories alcohol adds to your diet.
          </p>
          <h1 className="mt-5 mb-3">
            Why is it important to eat the right number of calories?
          </h1>
          <img src={img2} alt="" className="mt-4 img-fluid" />
          <p>
            If a person consumes too many calories, they can gain weight.
            According to the Centers for Disease Control and Prevention (CDC),
            the prevalence of adult obesity in the U.S. was 42.4%Trusted Source
            in 2017–2018.
          </p>
          <p>
            The CDC also note that obesity-related conditions result in some of
            the greatest medical costs. People can lose excess weight by eating
            around 500–1,000 caloriesTrusted Source fewer per day and aiming for
            a weight loss of around 1–2 pounds per week.
          </p>
          <h1 className="mt-5">Meal ideas</h1>
          <p>
            People on a 1,200 calorie diet need to eat nutrient dense food to
            avoid feeling hungry and prevent malnourishment. Lean proteins tend
            to be very dense in nutrients and low in calories. White
            carbohydrates, such as white bread, by contrast, contain more
            calories and fewer nutrients. The National Heart, Lung, and Blood
            Institute (NHLBI)Trusted Source provide menu plans and other
            information about which foods to choose when following a 1,200
            calorie diet. Some other meal and food ideas are as follows:
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
