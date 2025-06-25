def format_email_body(data):
    return f"""
    <h3>Internship Application</h3>
    <p><b>Name:</b> {data.fullName}</p>
    <p><b>Father's Name:</b> {data.fatherName}</p>
    <p><b>College:</b> {data.collegeName}</p>
    <p><b>Student ID:</b> {data.studentId}</p>
    <p><b>Mobile:</b> {data.mobile_number}</p>
    <p><b>Email:</b> {data.email}</p>
    <p><b>Qualification:</b> {data.qualification}</p>
    <p><b>Duration:</b> {data.duration}</p>
    <p><b>Location:</b> {data.location}</p>
    <p><b>Message:</b> {data.message}</p>
    """
