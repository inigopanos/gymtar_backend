const express = require('express');
// const saveSchema = require('./schema');
const mongoose = require('mongoose');

const {
  // eslint-disable-next-line no-unused-vars
  JointSchema,
  TestSchema,
  TestModel,
} = require('./schema');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Ruta raíz alcanzada');
  res.send('Se ha enviado el esquema de prueba');

  TestSchema.save().then((savedData) => {
    mongoose.set('debug', true);
    console.log('Datos guardados:', savedData);
  }).catch((error) => {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  });
});

router.get('/prueba', async (req, res) => {
  try {
    const testData = {
      // eslint-disable-next-line quote-props
      '1692783040531': {
        is_new: true,
        is_tracked: false,
        timestamp: [
          '1692783040531070201',
        ],
        body_list: [
          {
            id: 0,
            unique_object_id: '8a8ef213-860c-4f5a-9260-1cda25286937',
            tracking_state: 'ON',
            action_state: 'Unknown',
            position: [
              -0.15865983068943024,
              0.6491988897323608,
              -2.568483829498291,
            ],
            confidence: 96.8031997680664,
            keypoint: [
              [
                -0.052493076771497726,
                0.6890209913253784,
                -2.4663279056549072,
              ],
              [
                -0.05755646526813507,
                0.8221715688705444,
                -2.475292921066284,
              ],
              [
                -0.0718667283654213,
                0.9574984312057495,
                -2.4778151512145996,
              ],
              [
                -0.07759594917297363,
                1.091993808746338,
                -2.5044353008270264,
              ],
              [
                -0.08680936694145203,
                1.2325013875961304,
                -2.5245203971862793,
              ],
              [
                0.0437459833920002,
                1.4042811393737793,
                -2.5370523929595947,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
              [
                0.010029970668256283,
                1.4408059120178223,
                -2.5937037467956543,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
              [
                -0.08757885545492172,
                1.4082319736480713,
                -2.5420210361480713,
              ],
              [
                -0.026408996433019638,
                1.236424446105957,
                -2.6030750274658203,
              ],
              [
                -0.15232744812965393,
                1.22444486618042,
                -2.557029962539673,
              ],
              [
                0.04342333972454071,
                1.2425808906555176,
                -2.6374075412750244,
              ],
              [
                -0.20934361219406128,
                1.220473289489746,
                -2.455003023147583,
              ],
              [
                0.18949905037879944,
                1.221200704574585,
                -2.842078685760498,
              ],
              [
                -0.3844218850135803,
                1.1588969230651855,
                -2.30712890625,
              ],
              [
                0.4323810338973999,
                1.235033392906189,
                -3.2960739135742188,
              ],
              [
                -0.5082395672798157,
                1.1294653415679932,
                -2.1618640422821045,
              ],
              [
                0.03557707741856575,
                0.6893764734268188,
                -2.504197835922241,
              ],
              [
                -0.13480545580387115,
                0.6826987266540527,
                -2.4580111503601074,
              ],
              [
                0.11034652590751648,
                0.32274526357650757,
                -2.6105639934539795,
              ],
              [
                -0.14189913868904114,
                0.3141590356826782,
                -2.5251364707946777,
              ],
              [
                0.1400250643491745,
                -0.023002982139587402,
                -2.6439123153686523,
              ],
              [
                -0.1286376267671585,
                -0.03533279895782471,
                -2.638568639755249,
              ],
              [
                0.29550790786743164,
                -0.11397409439086914,
                -2.641225814819336,
              ],
              [
                -0.07028520852327347,
                -0.10602831840515137,
                -2.5272669792175293,
              ],
              [
                0.29858633875846863,
                -0.10000252723693848,
                -2.661128282546997,
              ],
              [
                -0.1364394873380661,
                -0.09639251232147217,
                -2.5275065898895264,
              ],
              [
                0.10047844797372818,
                -0.09245216846466064,
                -2.692387104034424,
              ],
              [
                -0.14869911968708038,
                -0.05385303497314453,
                -2.6291098594665527,
              ],
              [
                0.401897668838501,
                1.1973999738693237,
                -2.537127733230591,
              ],
              [
                -0.7007526755332947,
                1.0882039070129395,
                -2.537327766418457,
              ],
              [
                0.3975130319595337,
                1.2233473062515259,
                -2.5371134281158447,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
              [
                0.4108436405658722,
                1.1945048570632935,
                -2.537128210067749,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
              [
                NaN,
                NaN,
                NaN,
              ],
            ],
            local_position_per_joint: [],
            local_orientation_per_joint: [],
          },
        ],
      },
    };

    const testInstance = new TestModel(testData);
    // Aquí convertimos el objeto TestSchema a un objeto plano usando toObject()
    // const testObject = testInstance.toObject();

    console.log('Datos a guardar en /prueba:', testInstance);

    const savedData = await testInstance.save();

    console.log('Datos guardados en /prueba:', savedData);
    res.send('Datos guardados exitosamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  }
});

module.exports = router;
