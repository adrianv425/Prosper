from flask import Flask, render_template
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)

cred = credentials.Certificate('prosper-and-co-firebase-adminsdk-rf0ql-d53edcb1bd.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

P = db.collection(u'products').get()
PRODUCTS = []

for product in P:
    PRODUCTS.append({
        'productid': product.id,
        'data': product.to_dict()
        })

@app.route("/")
def home():
    return render_template('home.html', products=PRODUCTS, page='promo.html')



if __name__ == "__main__":
    app.run()