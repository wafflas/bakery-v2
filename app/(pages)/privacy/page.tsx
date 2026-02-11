import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Αρτοποιία Κουγιουμουτζάκης",
  description:
    "Ενημερωθείτε για την πολιτική απορρήτου και τη χρήση cookies στην ιστοσελίδα της Αρτοποιίας Κουγιουμουτζάκης.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-[100px] pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 pb-4 border-b border-gray-200">
          Πολιτική Απορρήτου & Cookies
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Εισαγωγή
            </h2>
            <p>
              Η Αρτοποιία Κουγιουμουτζάκης σέβεται την ιδιωτικότητά σας και
              δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. Η παρούσα
              πολιτική απορρήτου θα σας ενημερώσει για το πώς φροντίζουμε τα
              προσωπικά σας δεδομένα όταν επισκέπτεστε τον ιστότοπό μας και θα
              σας ενημερώσει για τα δικαιώματα απορρήτου σας και πώς σας
              προστατεύει ο νόμος (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Cookies
            </h2>
            <p className="mb-4">
              Ο ιστότοπός μας χρησιμοποιεί cookies για να σας ξεχωρίζει από
              άλλους χρήστες του ιστότοπού μας. Αυτό μας βοηθά να σας παρέχουμε
              μια καλή εμπειρία όταν περιηγείστε στον ιστότοπό μας και μας
              επιτρέπει επίσης να βελτιώσουμε τον ιστότοπό μας.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Τι είναι τα cookies;
            </h3>
            <p className="mb-4">
              Ένα cookie είναι ένα μικρό αρχείο γραμμάτων και αριθμών που
              αποθηκεύουμε στο πρόγραμμα περιήγησής σας ή στον σκληρό δίσκο του
              υπολογιστή σας, αν συμφωνείτε. Τα cookies περιέχουν πληροφορίες
              που μεταφέρονται στον σκληρό δίσκο του υπολογιστή σας.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Κατηγορίες cookies που χρησιμοποιούμε:
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Απαραίτητα Cookies:</strong> Αυτά είναι cookies που
                απαιτούνται για τη λειτουργία του ιστότοπού μας. Περιλαμβάνουν,
                για παράδειγμα, cookies που σας επιτρέπουν να συνδεθείτε σε
                ασφαλείς περιοχές του ιστότοπού μας.
              </li>
              <li>
                <strong>Cookies Αναλυτικών/Απόδοσης:</strong> Μας επιτρέπουν να
                αναγνωρίζουμε και να μετράμε τον αριθμό των επισκεπτών και να
                βλέπουμε πώς κινούνται οι επισκέπτες στον ιστότοπό μας όταν τον
                χρησιμοποιούν (Google Analytics). Αυτό μας βοηθά να βελτιώσουμε
                τον τρόπο λειτουργίας του ιστότοπού μας.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Διαχείριση Cookies
            </h2>
            <p>
              Μπορείτε να αλλάξετε τις προτιμήσεις σας για τα cookies ανά πάσα
              στιγμή κάνοντας κλικ στο κουμπί &quot;Ρυθμίσεις Cookies&quot; που
              εμφανίζεται στο κάτω μέρος της σελίδας ή μέσω του banner
              συγκατάθεσης.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Google Analytics
            </h2>
            <p>
              Χρησιμοποιούμε το Google Analytics για να κατανοήσουμε πώς
              χρησιμοποιείται ο ιστότοπός μας. Το Google Analytics χρησιμοποιεί
              cookies για τη συλλογή πληροφοριών χρήσης και συμπεριφοράς σε
              ανώνυμη και συγκεντρωτική μορφή.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Προσωπικά Δεδομένα
            </h2>
            <p>
              Δεν συλλέγουμε προσωπικά δεδομένα (όπως όνομα, διεύθυνση, email)
              εκτός αν μας τα παρέχετε οικειοθελώς, για παράδειγμα, μέσω της
              φόρμας επικοινωνίας. Τα δεδομένα αυτά χρησιμοποιούνται
              αποκλειστικά για τον σκοπό της επικοινωνίας μαζί σας.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Επικοινωνία
            </h2>
            <p>
              Για οποιαδήποτε ερώτηση σχετικά με την πολιτική απορρήτου μας,
              παρακαλούμε επικοινωνήστε μαζί μας στη διεύθυνση:
              <a
                href="mailto:info@kougioumoutzakisbakery.gr"
                className="text-red-800 hover:underline ml-1"
              >
                info@kougioumoutzakisbakery.gr
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            Τελευταία ενημέρωση: Φεβρουάριος 2026
          </div>
        </div>
      </div>
    </div>
  );
}
