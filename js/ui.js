// UI Enhancement Functions

// Toast Notifications
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #27ae60;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Loading State
function setLoading(element, isLoading) {
  if (isLoading) {
    element.disabled = true;
    element.textContent = 'Loading...';
    element.style.opacity = '0.6';
  } else {
    element.disabled = false;
    element.textContent = 'Save';
    element.style.opacity = '1';
  }
}

// Validation Functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(fields) {
  for (let field of fields) {
    if (!field.value.trim()) {
      showToast('Please fill in all required fields', 3000);
      return false;
    }
  }
  return true;
}

// Date Formatting
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  return `${parseInt(hours) % 12 || 12}:${minutes} ${parseInt(hours) >= 12 ? 'PM' : 'AM'}`;
}

// Search Function
function searchInList(searchQuery, items, searchFields) {
  return items.filter(item => {
    return searchFields.some(field => {
      const value = item[field]?.toString().toLowerCase() || '';
      return value.includes(searchQuery.toLowerCase());
    });
  });
}

// Sort Function
function sortByField(items, field, ascending = true) {
  return items.sort((a, b) => {
    if (ascending) {
      return String(a[field]).localeCompare(String(b[field]));
    } else {
      return String(b[field]).localeCompare(String(a[field]));
    }
  });
}

// CSV Export
function exportToCSV(data, filename) {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function convertToCSV(data) {
  const keys = Object.keys(data[0]);
  const header = keys.join(',');
  const rows = data.map(item => 
    keys.map(key => {
      const value = item[key];
      return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
    }).join(',')
  );
  
  return [header, ...rows].join('\n');
}

// Add CSS Styles for Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .loading {
    animation: spin 1s linear infinite;
  }
`;
document.head.appendChild(style);

// Print Function
function printContent(elementId) {
  const printWindow = window.open('', '', 'height=600,width=800');
  const content = document.getElementById(elementId);
  
  printWindow.document.write('<pre>');
  printWindow.document.write(content.innerHTML);
  printWindow.document.write('</pre>');
  printWindow.document.close();
  
  setTimeout(() => printWindow.print(), 250);
}
