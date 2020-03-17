from app import app
import numpy as np

@app.route("/random", methods=["GET", "POST"])
def random():
    title = request.form.get("title")
    book = Book.query.filter_by(title=title).first()
    db.session.delete(book)
    db.session.commit()
    return redirect("/")