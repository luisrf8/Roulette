#include <SPI.h>
#include <MFRC522.h>
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

#define RST_PIN  9       //Pin 9 para el reset del RC522
#define SS_PIN_ENB  10   //Pin 10 para el SS (SDA) del RC522
#define LED_STRIP 7 // On Trinket or Gemma, suggest changing this to 1
#define NUMPIXELS 150 // Popular NeoPixel ring size

Adafruit_NeoPixel pixels(NUMPIXELS, LED_STRIP, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 10 // Time (in milliseconds) to pause between pixels

// #define LED_BLUE 7 
// #define LED_GREEN 2
// rgb
// int ledRojo = 3;
// int ledVerde = 5;
// int ledAzul = 6;
// rgb
MFRC522 MyLectorRF(SS_PIN_ENB, RST_PIN); //Creamos el objeto para el RC522

String BufferID = "";
// String greenCompetitor = "e3a52f94";
// String BlueCompetitor = "e346261b";

// List of competitors

// Wildcards


// Black_Purple_competitors
String black_Purple_competitor_1 = "c25c6320";
String black_Purple_competitor_2 = "61a17322";
String black_Purple_competitor_3 = "629e4f49";
String black_Purple_competitor_4 = "c488fd29";
String black_Purple_competitor_5 = "d484a629";
String black_Purple_competitor_6 = "831e622d";
String black_Purple_competitor_7 = "d45f9529";
String black_Purple_competitor_8 = "611c1622";
String black_Purple_competitor_9 = "311779d22";
String black_Purple_competitor_10 = "72f1c82d";
String black_Purple_competitor_11 = "42315c25";
String black_Purple_competitor_12 = "e3a52f94";

// Blue_competitors
String blue_competitor_1 = "9358694";
String blue_competitor_2 = "29ab864";
String blue_competitor_3 = "b21e6f49";
String blue_competitor_4 = "c286ac20";
String blue_competitor_5 = "c28af720";
String blue_competitor_6 = "d2189920";
String blue_competitor_7 = "d439b629";
String blue_competitor_8 = "c24a2020";
String blue_competitor_9 = "d4ae5229";
String blue_competitor_10 = "c42aca29";
String blue_competitor_11 = "c474e029";
String blue_competitor_12 = "614b3722";

// Pink_competitors

// Purple_competitors



 
void setup() {
  Serial.begin(9600); //Iniciamos la comunicación  serial
  SPI.begin();        //Iniciamos el Bus SPI
  MyLectorRF.PCD_Init(); // Iniciamos  el MyLectorRF
  Serial.println("Control Inicializado ...");
  // pinMode(LED_GREEN, OUTPUT);
  // pinMode(LED_BLUE, OUTPUT);

  //rgb
    // pinMode(ledRojo,OUTPUT);
    // pinMode(ledVerde,OUTPUT);
    // pinMode(ledAzul,OUTPUT);
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
    clock_prescale_set(clock_div_1);
  #endif
    // END of Trinket-specific code.

    pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() 
{
  pixels.clear(); // Set all pixel colors to 'off'
  // Verificamos si se ha detectado alguna tarjeta
  if ( MyLectorRF.PICC_IsNewCardPresent()) 
  {  
      // Determinamos el codigo de la tarjeta
            if ( MyLectorRF.PICC_ReadCardSerial()) 
            {
                  // Recuperamos en ID de la Tarjeta
                  BufferID = "";
                  //Serial.print("Card UID:");
                  for (byte i = 0; i < MyLectorRF.uid.size; i++) 
                  {
                          //Serial.print(MyLectorRF.uid.uidByte[i] < 0x10 ? " 0" : " ");
                          //Serial.print(MyLectorRF.uid.uidByte[i], HEX);
                          BufferID = BufferID + String(MyLectorRF.uid.uidByte[i], HEX);
                  } 
                  
                  if (BufferID == "c4f29c29" || BufferID == "82855349" || BufferID == "6136f322" || BufferID == "51af1e22" || BufferID == "51f9a422" || BufferID == "6111eb22") {
                    Serial.println("comodin");
                      for(int i=0; i<NUMPIXELS; i++) { // For each pixel...
                        // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
                        // Here we're using a moderately bright green color:
                        pixels.setPixelColor(i, pixels.Color(255, 255, 255));
                        pixels.setPixelColor(i - 5, pixels.Color(0, 0, 0));

                        pixels.show();   // Send the updated pixel colors to the hardware.

                        delay(DELAYVAL); // Pause before next pass through loop
                      }

                  }
                  if (BufferID == black_Purple_competitor_1 || BufferID == black_Purple_competitor_2 || BufferID == black_Purple_competitor_3 || BufferID == black_Purple_competitor_4 || BufferID == black_Purple_competitor_5 || BufferID == black_Purple_competitor_6 || BufferID == black_Purple_competitor_7 || BufferID == black_Purple_competitor_8 || BufferID == black_Purple_competitor_9 || BufferID == black_Purple_competitor_10 || BufferID == black_Purple_competitor_11 || BufferID == black_Purple_competitor_12)
                   {
                    Serial.println("black_Purple_competitor");
                      for(int i=0; i<NUMPIXELS; i++) { // For each pixel...
                        // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
                        // Here we're using a moderately bright green color:
                        pixels.setPixelColor(i, pixels.Color(98, 8, 132));
                        pixels.setPixelColor(i - 1, pixels.Color(0, 0, 0));
                        pixels.show();   // Send the updated pixel colors to the hardware.
                        delay(DELAYVAL); // Pause before next pass through loop
                      }

                  }
                  if (BufferID == blue_competitor_1 || BufferID == blue_competitor_2 || BufferID == blue_competitor_3 || BufferID == blue_competitor_4 || BufferID == blue_competitor_5 || BufferID == blue_competitor_6 || BufferID == blue_competitor_7 || BufferID == blue_competitor_8 || BufferID == blue_competitor_9 || BufferID == blue_competitor_10 || BufferID == blue_competitor_11 || BufferID == blue_competitor_12)
                   {
                    Serial.println("blue_competitor");
                      for(int i=0; i<NUMPIXELS; i++) { // For each pixel...
                        // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
                        // Here we're using a moderately bright green color:
                        pixels.setPixelColor(i, pixels.Color(59,195,231));
                        pixels.setPixelColor(i - 1, pixels.Color(0, 0, 0));
                        pixels.show();   // Send the updated pixel colors to the hardware.
                        delay(DELAYVAL); // Pause before next pass through loop
                      }

                  }
                  if (BufferID == "c4b56e29" || BufferID == "22f66c20" || BufferID == "d43cc029" || BufferID == "c438a529" || BufferID == "d2639a20" || BufferID == "b2e91220" || BufferID == "c2206849" || BufferID == "83d0752d" || BufferID == "834fb72d" || BufferID == "d43c5429" || BufferID == "615f8f22" || BufferID == "92e99249")
                   {
                    Serial.println("pink_competitor");
                      for(int i=0; i<NUMPIXELS; i++) { // For each pixel...
                        // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
                        // Here we're using a moderately bright green color:
                        pixels.setPixelColor(i, pixels.Color(201, 38, 210));
                        pixels.setPixelColor(i - 1, pixels.Color(0, 0, 0));
                        pixels.show();   // Send the updated pixel colors to the hardware.
                        delay(DELAYVAL); // Pause before next pass through loop
                      }

                  }
                  
                  if (BufferID == "d2259049" || BufferID == "b2113520" || BufferID == "129b5f49" || BufferID == "c2a38e20" || BufferID == "b2d7820" || BufferID == "c4b34429" || BufferID == "d4455529" || BufferID == "83c26b2d" || BufferID == "f2855849" || BufferID == "d27552dd" || BufferID == "51aaf722" || BufferID == "51e0222")
                   {
                    Serial.println("purple_competitor");
                      for(int i=0; i<NUMPIXELS; i++) { // For each pixel...
                        // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
                        // Here we're using a moderately bright green color:
                        pixels.setPixelColor(i, pixels.Color(102, 36, 205));
                        pixels.setPixelColor(i - 1, pixels.Color(0, 0, 0));
                        pixels.show();   // Send the updated pixel colors to the hardware.
                        delay(DELAYVAL); // Pause before next pass through loop
                      }

                  }

                  // Terminamos la lectura de la tarjeta  actual
                  MyLectorRF.PICC_HaltA();         
              }      
  } 
}
