import React from 'react';
import { Trash2, ClipboardList, Home, Sprout } from 'lucide-react';

const CleaningProcess = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-yellow-400" />,
      title: 'Clasificación y organización',
      description: 'Clasificamos metódicamente todas las pertenencias, preservando documentos importantes, historiales médicos y recuerdos personales.',
    },
    {
      icon: <Trash2 className="w-12 h-12 text-yellow-400" />,
      title: 'Gestión de residuos',
      description: 'Retiramos y gestionamos adecuadamente los residuos, basura acumulada y objetos en mal estado.',
    },
    {
      icon: <Home className="w-12 h-12 text-yellow-400" />,
      title: 'Áreas críticas',
      description: 'Nos especializamos en la limpieza profunda de cocinas y baños, las zonas más afectadas por la acumulación.',
    },
    {
      icon: <Sprout className="w-12 h-12 text-yellow-400" />,
      title: 'Desinfección profesional',
      description: 'Realizamos una desinfección completa con productos bactericidas específicos para eliminar microorganismos y virus.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo se limpia una casa con síndrome de Diógenes?
          </h2>
          <div className="text-xl text-gray-600 space-y-6 max-w-4xl mx-auto">
            <p>
              Una casa afectada por Diógenes es generalmente insalubre, con acumulación de basura, malos olores, insectos y bacterias. La limpieza del síndrome de Diógenes es una tarea difícil porque hay que lidiar con malos olores, insectos, a veces plagas y, sobre todo, protegerse de las bacterias. Cualquier empresa especializada en la limpieza de Diógenes vendrá con el equipo de protección esencial: monos, guantes, gafas y calzado de protección.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Limpieza domiciliaria de casos de Diógenes: ordenar sus pertenencias y deshacerse de la basura
          </h3>
          <p className="text-gray-600">
            Una de las tareas más difíciles en un caso de Diógenes es clasificar lo que hay que tirar y lo que hay que conservar. A veces, una casa con Diógenes está llena de cubos de basura y objetos varios de hasta 1 metro de altura, que cubren toda la superficie de la vivienda y hacen casi imposible moverse por ella.
          </p>
          <p className="text-gray-600">
            La limpieza de una casa afectada por Diógenes requiere un enfoque metódico, ya que habrá que clasificar todas las pertenencias para conservar los documentos administrativos, los historiales médicos, la correspondencia y los recuerdos. A continuación, habrá que desalojar la casa con Diógenes, con una gran acumulación de enseres y objetos diversos amontonados en el suelo, así como la retirada de distintos tipos de basura, alimentos en mal estado y la limpieza de excrementos.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Limpieza de pisos con síndrome de Diógenes: las estancias más afectadas
          </h3>
          <p className="text-gray-600">
            Los aseos y la cocina suelen ser las estancias más afectadas en un piso que sufre Diógenes. La acumulación de platos que no se han lavado en varios meses, la comida en mal estado y los cubos de basura dificultan mucho la limpieza. Los aseos suelen ser especialmente antihigiénicos porque no se limpian desde hace meses, y el inodoro no se ha tirado de la cadena (suele estar averiado o atascado) desde hace semanas, a veces con excrementos en el suelo. En estos casos extremos pero frecuentes, los servicios de una empresa de limpieza de pisos Diogène son prácticamente indispensables.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Por qué recurrir a una empresa de limpieza de pisos con Diógenes?
          </h3>
          <p className="text-gray-600">
            Una vez que se haya detectado un piso con Diógenes, se dará cuenta rápidamente de por qué necesita recurrir a una empresa de limpieza de Diógenes. El hedor, los insectos, las plagas, los excrementos y meses de basura son difíciles de tratar. La desinfección del aire es esencial antes de empezar a trabajar en un entorno más saludable. La ropa de protección es esencial para evitar la contaminación. Es esencial disponer de un camión o un contenedor para retirar los residuos. Hay que tener cuidado de no contaminar las zonas comunes del edificio ni el vecindario. Los residuos deben eliminarse en un centro de eliminación de residuos. La empresa de limpieza del síndrome de Diogène debe limpiar todas las superficias con detergentes desinfectantes bactericidas eficaces contra microorganismos y virus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;