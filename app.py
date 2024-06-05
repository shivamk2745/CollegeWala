from flask import Flask, request,render_template, redirect,session
from CollegeAllotment import algorithms
from CollegeAllotment import college_links
import bcrypt
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
app.secret_key = 'secret_key'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def __init__(self,email,password,name):
        self.name = name
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self,password):
        return bcrypt.checkpw(password.encode('utf-8'),self.password.encode('utf-8'))


with app.app_context():
    db.create_all()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/exam')
def exam():
    return render_template('exam.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/compare')
def compare():
    return render_template('compare.html')


@app.route('/predictCollege')
def predictCollege():
    return render_template("predictCollege.html")

@app.route('/results', methods=['GET', 'POST'])
@app.route('/results', methods=['GET', 'POST'])
def results():
    if request.method == 'POST':
        marks = request.form['marks']
        algorithm = request.form['algo']
        caste = request.form['caste']
        c = algorithms()

        if algorithm == "KNN":
            college_info = c.predictKNN_with_links(marks, caste)
            return render_template("results.html", colleges=[college_info])
        elif algorithm == "SVM":
            college = c.predictSVM(marks, caste)
            college_info = {"name": college, "cutoff": "NA", "url": college_links.get(college, 'Website not found')}
            return render_template("results.html", colleges=[college_info])

    return render_template("results.html", colleges=None)




@app.route('/colleges')
def colleges():
    return render_template("colleges.html")

@app.route('/web')
def web():
    return render_template("web.html")

@app.route('/Devops')
def Devops():
    return render_template("Devops.html")

@app.route('/Python')
def Python():
    return render_template("Python.html")

@app.route('/Math')
def Math():
    return render_template("Math.html")

@app.route('/Chemistry')
def Chemistry():
    return render_template("Chemistry.html")

@app.route('/quiz')
def quiz():
    return render_template("quiz.html")

@app.route('/sortedResults')
def sortedResults():
    start = float(request.args.get('minpercentage'))
    end = float(request.args.get('maxpercentage'))
    results = int(request.args.get('results'))
    caste = str(request.args.get('caste'))
    branch = str(request.args.get('branch'))
    c = algorithms()
    my_list = c.get_by_range(start, end, results, caste,branch)
    # return render_template("sortedResults.html", my_list=my_list, size=len(my_list))
    return render_template("sortedResults.html", my_list=my_list, size=len(my_list), college_links=college_links)

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        # handle request
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        new_user = User(name=name,email=email,password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/login')



    return render_template('register.html')

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()
        
        if user and user.check_password(password):
            session['email'] = user.email
            return redirect('/dashboard')
        else:
            return render_template('login.html',error='Invalid user')

    return render_template('login.html')


@app.route('/dashboard')
def dashboard():
    if session['email']:
        user = User.query.filter_by(email=session['email']).first()
        return render_template('dashboard.html',user=user)
    
    return redirect('/login')

@app.route('/logout')
def logout():
    session.pop('email',None)
    return redirect('/login')




