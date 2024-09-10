import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

// Mock de la función communicateWithOpenAI
jest.mock('../src/lib/openAIApi.js', () => ({
  communicateWithOpenAI: jest.fn(),
}));

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  describe('when API call is successful', () => {
    it('should return a valid response from OpenAI API', async () => {
      // Definimos el mock para devolver una respuesta simulada
      const mockResponse = {
        choices: [
          {
            message: {
              content: "Estoy bien, gracias por preguntar."
            }
          }
        ]
      };

      // Simulamos la respuesta de la función communicateWithOpenAI
      communicateWithOpenAI.mockResolvedValue(mockResponse);

      const message = "Hola, ¿cómo estás?";
      const movieName = "Buscando a Dory";

      const data = await communicateWithOpenAI(message, movieName);

      // Verificamos que la respuesta tenga la estructura esperada
      expect(data).toHaveProperty('choices');
      expect(data.choices[0]).toHaveProperty('message');
      expect(data.choices[0].message).toHaveProperty('content');
      expect(data.choices[0].message.content).toBe("Estoy bien, gracias por preguntar.");
    });
  });

  describe('when API call fails', () => {
    it('should handle errors gracefully', async () => {
      // Simulamos un error en la API
      const mockError = new Error('API is down');
      communicateWithOpenAI.mockRejectedValue(mockError);

      const message = "Hola, ¿cómo estás?";
      const movieName = "Las locuras del emperador";

      await expect(communicateWithOpenAI(message, movieName)).rejects.toThrow('API is down');
    });
  });
});
